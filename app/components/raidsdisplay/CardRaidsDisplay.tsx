import type { SearchResultsProps } from "~/components/SearchResultsTable";
import type { RawRaid } from "~/poke/RawRaid";
import { GameVersion } from "~/poke/RawRaid";
import { PokeName } from "~/poke/PokeName";
import { PokeType } from "~/poke/PokeType";
import { PokeNature } from "~/poke/PokeNature";
import { CopyComponent } from "~/components/SearchResultsTable";

const raidImg = (raid: RawRaid) => `https://mewtwoscloning.com/sprites/shiny/${PokeName[raid.Species].toLowerCase()}.gif`;
const teraImg = (raid: RawRaid) => `https://mewtwoscloning.com/tera_icons/${PokeType[raid.TeraType].toLowerCase()}.png`;

export function CardRaidsDisplay({ready, raids}: SearchResultsProps) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {raids.map((raid) => (
                <li
                  key={raid.id}
                  className="col-span-1 flex flex-col divide-y divide-gray-800 rounded-lg bg-gray-600 text-center shadow"
                >
                  <div className="static flex flex-1 flex-col p-8">
                    <img alt={PokeName[raid.Species]} className="h-10 absolute" src={teraImg(raid)} />
                    <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={raidImg(raid)} alt="" />
                    <h3 className="mt-6 text-sm font-medium text-gray-200">{raid.Gender} {PokeName[raid.Species]}</h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                      <dt className="sr-only">Nature</dt>
                      <dd className="text-sm text-gray-300">
                        {PokeNature[raid.Nature]}
                      </dd>
                      <dt className="sr-only">IVs</dt>
                      <dd className="text-sm text-gray-300">
                        {raid.HP}/{raid.ATK}/{raid.DEF}/{raid.SPA}/{raid.SPD}/{raid.SPE}
                      </dd>
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-300">
                        {raid.Game == GameVersion.Scarlet ? 'Scarlet' : 'Violet'}
                      </dd>
                      <dt className="sr-only">Stars</dt>
                      <dd className="mt-3">
                        <span className="rounded-full bg-green-900 px-2 py-1 text-xs font-medium text-green-200">
                          {raid.Stars} ☆
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-900">
                      <div className="flex w-0 flex-1">
                        <CopyComponent str={`${raid.Game === GameVersion.Scarlet ? "$" : "."}ra ${raid.Seed} ${raid.Stars}`} cls="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-200 cursor-pointer">
                          Copy ra<span className="sr-only">, {raid.Seed}</span>
                        </CopyComponent>
                      </div>
                      <div className="-ml-px flex w-0 flex-1">
                        <CopyComponent str={`${raid.Game === GameVersion.Scarlet ? "$" : "."}rv ${raid.Seed} ${raid.Stars}`} cls="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-200 cursor-pointer">
                          Copy rv<span className="sr-only">, {raid.Seed}</span>
                        </CopyComponent>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}