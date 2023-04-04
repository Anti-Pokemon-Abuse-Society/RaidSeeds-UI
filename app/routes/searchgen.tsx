import { json, LoaderArgs } from "@remix-run/node";
import { RaidSeedDB } from "~/api/RaidSeedDB";
import { onlyUnique } from "~/helpers/arrays/onlyUnique";
import { GameVersion } from "~/poke/RawRaid";
import { useLoaderData } from "@remix-run/react";
import { PokeName } from "~/poke/PokeName";

function orderByName(list: number[]) {
  return list.sort((a,b) => PokeName[a].localeCompare(PokeName[b]))
}

export async function loader({ request }: LoaderArgs) {
  const raids = await RaidSeedDB.GetAll();

  const scarletExclusives = orderByName(raids.filter(r => r.Game === GameVersion.Scarlet).map(r => r.Species).filter(onlyUnique));
  const violetExclusives = orderByName(raids.filter(r => r.Game === GameVersion.Violet).map(r => r.Species).filter(onlyUnique));
  const allSpecies = orderByName(raids.map(r => r.Species).filter(onlyUnique));

  return json({ raids, scarletExclusives, violetExclusives, allSpecies });
}

export default function Searchgen() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <pre>
        export const PokeSupportedSpecies = {JSON.stringify(data.allSpecies)};
      </pre>
      <pre>
        export const PokeVioletSpecies = {JSON.stringify(data.violetExclusives)};
      </pre>

      <pre>
        export const PokeScarletSpecies = {JSON.stringify(data.scarletExclusives)};
      </pre>
    </div>
  )
}