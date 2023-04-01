export class PokeDexCheater
{
  public static GetRearrangedAsNational<T>(specNames: T[]): T[] {
    const result  = new Array<T>(specNames.length);
    for (let indexInternal = 0; indexInternal < specNames.length; indexInternal++)
    {
      const indexNational  = PokeDexCheater.GetNational9(indexInternal);
      result[indexNational] = specNames[indexInternal];
    }

    return result;
  }

  public static GetInternal9(species: number): number {
    const shift = species - PokeDexCheater.FirstUnalignedNational9;
    const table = PokeDexCheater.Table9NationalToInternal;
    if (shift < 0 || shift >= table.length) {
      return species;
    }
    return species + table[shift];
  }

  public static GetNational9(raw: number): number {
    const table = PokeDexCheater.Table9InternalToNational;
    const shift = raw - PokeDexCheater.FirstUnalignedInternal9;
    if (shift < 0 || shift >= table.length) {
      return raw;
    }
    return raw + table[shift];
  }

  private static readonly FirstUnalignedNational9 = 917;
  private static readonly FirstUnalignedInternal9 = PokeDexCheater.FirstUnalignedNational9;

  private static readonly Table9NationalToInternal = [
    1, 1, 1, 1, 33, 33, 33, 21, 21, 44, 44, 7, 7, 7, 29, 31, 31, 31, 68, 68, 68, 2, 2, 17, 17, 30,
    30, 24, 24, 28, 28, 58, 58, 12, -13, -13, -31, -31, -29, -29, 43, 43, 43, -31, -31, -3, -30, -30,
    -23, -23, -14, -24, -3, -3, -47, -47, -12, -27, -27, -44, -46, -26, 31, 29, -53, -65, 25, -6, -3,
    -7, -4, -4, -8, -4, 1, -3, -3, -6, -4, -47, -47, -47, -23, -23, -5, -7, -9, -7, -20, -13, -9, -9,
    -29, -23,
  ];

  private static readonly Table9InternalToNational = [
    65, -1, -1,
    -1, -1, 31, 31, 47, 47, 29, 29, 53, 31,
    31, 46, 44, 30, 30, -7, -7, -7, 13, 13,
    -2, -2, 23, 23, 24, -21, -21, 27, 27, 47,
    47, 47, 26, 14, -33, -33, -33, -17, -17, 3,
    -29, 12, -12, -31, -31, -31, 3, 3, -24, -24,
    -44, -44, -30, -30, -28, -28, 23, 23, 6, 7,
    29, 8, 3, 4, 4, 20, 4, 23, 6, 3,
    3, 4, -1, 13, 9, 7, 5, 7, 9, 9,
    -43, -43, -43, -68, -68, -68, -58, -58, -25, -29,
    -31,
    ]
}