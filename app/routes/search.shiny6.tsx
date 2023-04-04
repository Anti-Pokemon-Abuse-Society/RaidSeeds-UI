import { PokeName } from "~/poke/PokeName";
import { SearchSelect } from "~/components/SearchComponents";
import { GameVersion } from "~/poke/RawRaid";
import { useState } from "react";
import { useRaidsDB } from "~/hooks/useRaidsDB";
import { usePokeSpecies } from "~/hooks/usePokeSpecies";
import { PokeType } from "~/poke/PokeType";
import { PokeNature } from "~/poke/PokeNature";
import { SearchResultsTable } from "~/components/SearchResultsTable";

export default function SearchShiny6Page() {
  const [game, setGame] = useState(GameVersion.Both);
  const [species, setSpecies] = useState(591);
  const [tera, setTera] = useState("any");
  const [nature, setNature] = useState("any");
  const filteredSpecies = usePokeSpecies(game);

  const [ready, results] = useRaidsDB(species, game, tera, nature);

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-xl">Shiny 6 ☆ Raids</h1>
      <p>
        Note: Scarlet raids are <code>$ra</code> & Violet raids are <code>.ra</code>
      </p>
      <SearchSelect onChange={setGame} value={game}>
        <option value={GameVersion.Both}>Bofa</option>
        <option value={GameVersion.Scarlet}>Scarlet</option>
        <option value={GameVersion.Violet}>Violet</option>
      </SearchSelect>
      <SearchSelect onChange={setSpecies} value={species}>
        {filteredSpecies.map(species => (
          <option value={species} key={species}>
            {PokeName[species]}
          </option>
        ))}
      </SearchSelect>
      <SearchSelect onChange={setTera} value={tera}>
        <option value="any">Any tera</option>
        {PokeType.map(tera => (
          <option value={tera} key={tera}>
            {tera}
          </option>
        ))}
      </SearchSelect>
      <SearchSelect onChange={setNature} value={nature}>
        <option value="any">Any Nature</option>
        {PokeNature.map(pokeNature => (
          <option value={pokeNature} key={pokeNature}>
            {pokeNature}
          </option>
        ))}
      </SearchSelect>

      <SearchResultsTable ready={ready} raids={results} />
    </div>
  )
}