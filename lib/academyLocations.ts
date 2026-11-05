export type AcademyLocation = {
  source_id: number;
  branch_name: string;
  region_sido: string;
  region_gugun: string;
  road_address: string;
  latitude: number | null;
  longitude: number | null;
};

export async function getAcademyLocations(): Promise<AcademyLocation[]> {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.error('Academy locations: Supabase configuration is missing.');
    return [];
  }

  const query = new URLSearchParams({
    select: 'source_id,branch_name,region_sido,region_gugun,road_address,latitude,longitude',
    order: 'source_id.asc',
    limit: '500',
  });

  try {
    const response = await fetch(`${url}/rest/v1/academy_locations?${query}`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Accept-Profile': 'itda',
      },
      cache: 'no-store',
    });
    if (!response.ok) {
      console.error(`Academy locations: Supabase returned ${response.status}.`);
      return [];
    }
    return (await response.json()) as AcademyLocation[];
  } catch (error) {
    console.error('Academy locations: request failed.', error);
    return [];
  }
}
