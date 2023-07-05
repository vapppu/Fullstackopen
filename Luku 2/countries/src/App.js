import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [countryToShow, setCountryToShow] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        console.log(response);
      })
      .catch((error) => console.log("Error fetching data from server."));
  }, []);

  const handleInputChange = (event) => {

    const userInput = event.target.value;

    setSearchTerm(userInput);

    console.log(`Filtering results with ${userInput}`);

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(userInput.toLowerCase())
    );

    console.log(filteredCountries);

    if (filteredCountries.length === 1) {
      console.log(`One country found, rendering data`);
      setCountryToShow(filteredCountries[0]);
    } else {
      setCountryToShow(null);
    }

    setCountriesToShow(filteredCountries);

  };

    const showCountry = (country) => {
      console.log(`Showing country ${country}`)
        setCountryToShow(country)
      }

  return (
    <div>
      <h1>Countries</h1>

      <SearchBox inputChanged={handleInputChange} />

      <Countries countriesToShow={countriesToShow} countryToShow = {countryToShow} term={searchTerm} showCountry = {showCountry}/>

      <Country country = {countryToShow} />

    </div>
  );
};

export default App;
