import { gql } from "@apollo/client";

export const GET_COUNTRY_CODES = gql`
  query Country {
    countries {
      code
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      emoji
      native
      phone
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
