export interface CountryCode {
  __typename: string | undefined;
  code: string | undefined;
}

export interface Country {
  code?: string | undefined;
  name?: string | undefined;
  native?: string | undefined;
  phone?: string | undefined;
  continent?: Continent | undefined;
  capital?: string | undefined;
  currency?: string | undefined;
  languages?: Language[] | undefined;
  emoji?: string | undefined;
  emojiU?: string | undefined;
  states?: State[] | undefined;
}

export interface Continent {
  code?: string | undefined;
  name?: string | undefined;
  countries?: Country[] | undefined;
}

export interface Language {
  code?: string | undefined;
  name?: string | undefined;
  native?: string | undefined;
  rtl?: boolean | undefined;
}

export interface State {
  code?: string | undefined;
  name?: string | undefined;
  country?: Country | undefined;
}
