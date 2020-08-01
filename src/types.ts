// models

export interface Hero {
  name: string;
  id: string;
  alliance: string[];
  tier: string | number;
}

export interface Alliance {
  units_per_level: string | number;
  level_count: string | number;
  alliance_info: string;
  level_info: string[];
}

export interface Field {
  heroes: Hero[];
  alliances: string[];
}
