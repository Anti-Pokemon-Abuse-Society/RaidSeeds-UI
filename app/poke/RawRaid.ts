export enum GameVersion {
  Scarlet = 'SL',
  Violet = 'VL',
  Both = 'Both',
}

export interface RawRaid {
  id: number;
  Game: GameVersion;
  Seed: string;
  Shiny: boolean;
  Stars: number;
  Species: number;
  Form: number;
  Level: number;
  TeraType: number;
  HP: number;
  ATK: number;
  DEF: number;
  SPA: number;
  SPD: number;
  SPE: number;
  Ability: number;
  Nature: number;
  Gender: string;
  Height: number;
  Weight: number;
  Scale: number;
}

export const fromRawRaid = ([game, seed, shiny, stars, species, form, level, teratype, hp, atk, def, spa, spd, spe, ability, nature, gender, height, weight, scale]: any, i: number): RawRaid => ({
  id: i,
  Game: game === GameVersion.Scarlet ? GameVersion.Scarlet : GameVersion.Violet,
  Seed: seed,
  Shiny: shiny === 'True',
  Stars: parseInt(stars),
  Species: parseInt(species),
  Form: parseInt(form),
  Level: parseInt(level),
  TeraType: parseInt(teratype),
  HP: parseInt(hp),
  ATK: parseInt(atk),
  DEF: parseInt(def),
  SPA: parseInt(spa),
  SPD: parseInt(spd),
  SPE: parseInt(spe),
  Ability: parseInt(ability),
  Nature: parseInt(nature),
  Gender: gender,
  Height: parseInt(height),
  Weight: parseInt(weight),
  Scale: parseInt(scale)
});

export const fromRawRaids = (raw: any[]) => raw.map(fromRawRaid);