import React from "react";
import { Continent, Language } from "../../interfaces";
import "./CountryInfoContainer.scss";

interface Props {
  emoji: string | undefined;
  name: string | undefined;
  native: string | undefined;
  phone: string | undefined;
  continent: Continent | undefined;
  languages: Language[] | undefined;
}

const CountryInfoContainer: React.FunctionComponent<Props> = (props) => {
  const { emoji, name, native, phone, continent, languages } = props;

  const description = `${name}, also written as '${native}' in native, is part of ${
    continent?.name
  }. Language(s): ${languages?.map((language) => {
    return ` ${language.name}`;
  })}`;

  return (
    <div className="country-info-container">
      <div className="country-flag-container">
        <span>{emoji}</span>
      </div>
      <div className="country-name-container">
        <h1>{name}</h1>
      </div>
      <div className="country-description-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CountryInfoContainer;
