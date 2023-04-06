import type { RawRaid } from "~/poke/RawRaid";
import { GameVersion } from "~/poke/RawRaid";
import { useEffect, useMemo, useState } from "react";
import { RaidSeedDB } from "~/api/RaidSeedDB";
import { PokeType } from "~/poke/PokeType";
import { PokeNature } from "~/poke/PokeNature";

let raids: RawRaid[] | null = null;

export function useRaidsDB(species: number, game: GameVersion, tera: string, nature: string) {
  const [ready, setReady] = useState(false);


  useEffect(() => {
    if (raids) {
      setReady(true);
      return;
    }
    (async () => {
      raids = await RaidSeedDB.GetAll();
      setReady(true);
    })();
  }, []);


  const results = useMemo(() => {
    if (!ready || !raids) return [];
    return raids.filter(raid => {
      if (game !== GameVersion.Both) {
        if (raid.Game !== game) return false;
      }

      if (species !== raid.Species) return false;
      if (tera !== "any") {
        if (PokeType[raid.TeraType] !== tera) return false;
      }
      if (nature !== "any") {
        if (PokeNature[raid.Nature] !== nature) return false;
      }
      return true;
    });
  }, [game, nature, ready, species, tera]);

  return useMemo(() => [ready, results] as const, [ready, results]);
}