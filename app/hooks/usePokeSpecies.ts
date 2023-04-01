import { GameVersion } from "~/poke/RawRaid";
import { useMemo } from "react";
import { PokeScarletSpecies, PokeSupportedSpecies, PokeVioletSpecies } from "~/poke/generated/PokeSpeciesFilters";

export function usePokeSpecies(game: GameVersion) {
  return useMemo(() => {
    switch (game) {
      case GameVersion.Violet:
        return PokeVioletSpecies;
      case GameVersion.Scarlet:
        return PokeScarletSpecies;
      default:
        return PokeSupportedSpecies;
    }
  }, [game]);
}