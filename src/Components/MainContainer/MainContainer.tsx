import React from "react";
import "./MainContainer.scss";

// Hook imports
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

// Component imports
import CountryInfoContainer from "../CountryInfoContainer/CountryInfoContainer";
import RandomizeButton from "../RandomizeButton/RandomizeButton";
import { CountryCode } from "../../interfaces";

// Query imports
import { GET_COUNTRY_NAME_AND_EMOJI } from "../../GraphQL/Queries.js";

// Interface imports
import { Country } from "../../interfaces";

interface Props {
  countryCodes: CountryCode[] | undefined;
}

const MainContainer: React.FunctionComponent<Props> = (props) => {
  const { countryCodes } = props;

  // Return random country code
  const getRandomCountryCode = () => {
    if (countryCodes) {
      return countryCodes[Math.floor(Math.random() * countryCodes.length)].code;
    }

    // Return "NL" as default if countryCodes is undefined
    return "NL";
  };

  const [code, setCode] = useState<string | undefined>(getRandomCountryCode);
  const [country, setCountry] = useState<Country>();

  // Retrieve random country after first render
  useEffect(() => {
    if (countryCodes) {
      setCode(
        countryCodes[Math.floor(Math.random() * countryCodes.length)].code
      );
    }
  }, [countryCodes]);

  // Retrieve country with country code
  const { error, loading, data, refetch } = useQuery(
    GET_COUNTRY_NAME_AND_EMOJI,
    {
      variables: { code },
    }
  );

  // Set country state using query result
  useEffect(() => {
    if (data) {
      setCountry(data.country);
    }

    if (error) {
      alert(error);
    }
  }, [data, error, countryCodes, code]);

  // Fetch new country by button click
  const fetchCountry = () => {
    refetch({
      code: getRandomCountryCode(),
    });
  };

  return (
    <div className="main-container">
      <div className="main-content">
        <CountryInfoContainer
          name={country?.name}
          emoji={country?.emoji}
          native={country?.native}
          phone={country?.phone}
          continent={country?.continent}
          languages={country?.languages}
        />
        <RandomizeButton
          onClickHandler={() => fetchCountry()}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default MainContainer;
