import type { RawRaid } from "~/poke/RawRaid";
import { useCallback, useState } from "react";
import copy from 'copy-to-clipboard';
import { ShortToggle } from "~/components/ShortToggle";
import { TableRaidsDisplay } from "~/components/raidsdisplay/TableRaidsDisplay";
import { CardRaidsDisplay } from "~/components/raidsdisplay/CardRaidsDisplay";

export interface SearchResultsProps {
  raids: RawRaid[];
  ready: boolean;
}

export const CopyComponent = ({children, str, cls}: {children: any, str: string, cls?: string}) => {
  const copyCode = useCallback(() => {
    copy(str);
  }, [str]);
  return (
    <div onClick={copyCode} className={cls}>
      {children}
    </div>
  );
}

export function SearchResultsTable({ raids, ready }: SearchResultsProps) {
  const [showCards, setShowCards] = useState(true);
  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Raids</h1>
          <p className="text-sm text-gray-200">
            A list of all the raids we found matching your request.
          </p>
        </div>
        <div className="sm:flex-auto flex-end">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Raids</h1>
          <ShortToggle enabled={showCards} setEnabled={setShowCards} />
        </div>
      </div>

      {showCards ? <CardRaidsDisplay raids={raids} ready={ready} /> : <TableRaidsDisplay raids={raids} ready={ready} /> }
    </div>
  )
}
