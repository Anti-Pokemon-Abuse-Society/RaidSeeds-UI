import Papa from 'papaparse'
import type { RawRaid } from "~/poke/RawRaid";
import { fromRawRaids } from "~/poke/RawRaid";

export const RaidSeedDB = {
  GetAll() {
    return new Promise<RawRaid[]>((resolve) => {
      return fetch("https://listromago.s3.amazonaws.com/6star.csv").then(r => r.text()).then(raidsRaw => {
        const data = Papa.parse(raidsRaw);

        if (data.errors.length > 0) {
          console.log(data);
          return resolve([]);
        }

        return resolve(fromRawRaids(data.data));
      }).catch((e) => {
        console.log(e)
        return resolve([]);
      })
    });
  }
}