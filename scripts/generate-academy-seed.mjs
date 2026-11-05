import { readFileSync, writeFileSync } from 'node:fs';

const [sourcePath, outputPath] = process.argv.slice(2);
if (!sourcePath || !outputPath) {
  throw new Error('Usage: node scripts/generate-academy-seed.mjs SOURCE_JSON OUTPUT_SQL');
}

const source = JSON.parse(readFileSync(sourcePath, 'utf8'));
if (!Array.isArray(source.list) || source.list.length === 0) {
  throw new Error('The source has no academy list.');
}

const sqlText = (value) => value == null ? 'null' : `'${String(value).replaceAll("'", "''")}'`;
const ids = new Set();
const rows = source.list.map((entry) => {
  const id = Number(entry.seq);
  if (!Number.isInteger(id) || ids.has(id)) throw new Error(`Invalid or duplicate source ID: ${entry.seq}`);
  ids.add(id);

  const [longitude, latitude] = entry.mapCode
    ? entry.mapCode.split(',').map((value) => Number(value.trim()))
    : [null, null];
  if ((latitude !== null && (!Number.isFinite(latitude) || latitude < 33 || latitude > 39)) ||
      (longitude !== null && (!Number.isFinite(longitude) || longitude < 124 || longitude > 132))) {
    throw new Error(`Invalid coordinates for source ID ${id}`);
  }
  for (const field of ['placeName', 'placeSido', 'doroAddr']) {
    if (!String(entry[field] ?? '').trim()) throw new Error(`Missing ${field} for source ID ${id}`);
  }

  return `  (${id}, ${sqlText(entry.placeName)}, ${sqlText(entry.placeSido)}, ${sqlText(entry.placeGugun)}, ${sqlText(entry.doroAddr)}, ${sqlText(entry.jibunAddr || null)}, ${latitude ?? 'null'}, ${longitude ?? 'null'})`;
});

const sql = `-- Public listing snapshot: https://myoungmoon.com/academy (2026-11-05)
-- Four source records have no coordinates; they remain searchable in the list.
insert into itda.academy_locations
  (source_id, branch_name, region_sido, region_gugun, road_address, jibun_address, latitude, longitude)
values
${rows.join(',\n')}
on conflict (source_id) do update set
  branch_name = excluded.branch_name,
  region_sido = excluded.region_sido,
  region_gugun = excluded.region_gugun,
  road_address = excluded.road_address,
  jibun_address = excluded.jibun_address,
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  imported_at = now();
`;

writeFileSync(outputPath, sql, 'utf8');
console.log(`Generated ${rows.length} academy rows (${rows.filter((row) => row.endsWith('null, null)')).length} without coordinates).`);
