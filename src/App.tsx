import "./global.scss";

// Hook imports
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

// Component imports
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";
import { ClipLoader } from "react-spinners";

// Query imports
import { GET_COUNTRY_CODES } from "./GraphQL/Queries";

// Interface imports
import { CountryCode } from "./interfaces";

function App() {
  const { error, loading, data } = useQuery(GET_COUNTRY_CODES);
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>();

  // Save all country codes
  useEffect(() => {
    if (data) {
      setCountryCodes(data.countries);
    }

    if (error) {
      alert(error);
    }
  }, [data, error]);

  return (
    <div className="App">
      <Header />
      {loading ? (
        <div className="center-v-h">
          <ClipLoader />
        </div>
      ) : (
        <MainContainer countryCodes={countryCodes} />
      )}
      <Footer />
    </div>
  );
}

export default App;
