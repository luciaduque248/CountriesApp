export interface Country {
  name: {
    common: string
    official: string
    nativeName?: {
      [languageCode: string]: {
        official: string
        common: string
      }
    }
  }
  cca2: string
  cca3: string
  flags: {
    png: string
    svg: string
    alt?: string
  }
  population: number
  region: string
  subregion?: string
  capital?: string[]
  languages?: {
    [code: string]: string
  }
  currencies?: {
    [code: string]: {
      name: string
      symbol: string
    }
  }
  tld?: string[]
  borders?: string[]
}
