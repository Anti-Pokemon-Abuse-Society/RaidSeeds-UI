import type { SearchResultsProps } from "~/components/SearchResultsTable";
import { GameVersion } from "~/poke/RawRaid";
import { PokeName } from "~/poke/PokeName";
import { PokeType } from "~/poke/PokeType";
import { PokeNature } from "~/poke/PokeNature";
import { PokeAbility } from "~/poke/PokeAbility";
import { CopyComponent } from "~/components/SearchResultsTable";

export function TableRaidsDisplay({ raids, ready}: SearchResultsProps) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-900">
              <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-6">
                  Seed
                </th>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-6">
                  Species
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                  Tera
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                  Nature
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                  Ability
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Code</span>
                </th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-900 bg-gray-500">
              {ready && raids.length < 1 && (
                <tr>
                  <td colSpan={6}>
                    Unable to match your search results :(
                  </td>
                </tr>
              ) }
              {raids.map((raid) => (
                <tr key={raid.Seed}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">
                    <CopyComponent str={`${raid.Game === GameVersion.Scarlet ? "$" : "."}ra ${raid.Seed} ${raid.Stars}`}>
                      {raid.Game === GameVersion.Scarlet ? "$" : "."}ra {raid.Seed} {raid.Stars}
                    </CopyComponent>
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">
                    {PokeName[raid.Species]}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                    {PokeType[raid.TeraType]}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{PokeNature[raid.Nature]}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{PokeAbility[raid.Ability]}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <CopyComponent str={`${raid.Game === GameVersion.Scarlet ? "$" : "."}ra ${raid.Seed} ${raid.Stars}`} cls="text-indigo-300 hover:text-indigo-900">
                      Copy<span className="sr-only">, {raid.Seed}</span>
                    </CopyComponent>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}