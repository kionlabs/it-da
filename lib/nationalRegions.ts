import regionData from './nationalRegions.json';

export type NationalRegion = {
  code: string;
  province: string;
  district: string;
  name: string;
};

// Legal eup/myeon/dong: MOLIT public data (2026-06-30).
// Administrative-only names: SGIS boundaries modified by vuski/admdongkor (2026-10-01).
// The latter are CC BY 4.0; see https://github.com/vuski/admdongkor/blob/master/LICENSE-DATA
export const nationalRegions: NationalRegion[] = regionData;

const regionsByCode = new Map(nationalRegions.map((region) => [region.code, region]));

export function findNationalRegion(code: string) {
  return regionsByCode.get(code);
}

export function regionLabel(region: NationalRegion) {
  return [region.province, region.district, region.name].filter(Boolean).join(' ');
}

function compact(value: string) {
  return value.toLocaleLowerCase('ko-KR').replace(/[\s·,.-]/g, '');
}

function baseDongName(name: string) {
  return name.replace(/\d+(?=동$)/, '');
}

function shortProvince(name: string) {
  return name.replace(/(특별자치시|특별자치도|특별시|광역시|도)$/, '');
}

export function searchNationalRegions(query: string, limit = 12) {
  const terms = query.trim().split(/\s+/).map(compact).filter(Boolean);
  if (!terms.length) return [];

  return nationalRegions
    .map((region) => {
      const full = compact(regionLabel(region));
      const name = compact(region.name);
      const base = compact(baseDongName(region.name));
      const short = compact(shortProvince(region.province));
      const text = compact(`${region.province} ${region.district} ${region.name} ${base} ${short} ${short}시 ${short}도 ${short}${region.district}${region.name} ${short}${region.name} ${region.district}${region.name}`);
      if (!terms.every((term) => text.includes(term))) return null;

      const joined = terms.join('');
      const target = terms[terms.length - 1];
      const score = name === target || name === joined ? 0 : base === target || base === joined ? 1 : name.startsWith(target) ? 2 : full.includes(joined) ? 3 : 4;
      return { region, score };
    })
    .filter((match): match is { region: NationalRegion; score: number } => match !== null)
    .sort((a, b) => a.score - b.score || regionLabel(a.region).localeCompare(regionLabel(b.region), 'ko-KR'))
    .slice(0, limit)
    .map(({ region }) => region);
}
