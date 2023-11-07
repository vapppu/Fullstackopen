import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import CountryData from "./components/CountryData";



const App = () => {
  const [countryNames, setCountryNames] = useState([]);
  const [foundCountryNames, setFoundCountryNames] = useState([]);
  const [countryToShow, setCountryToShow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((result) => {
        setCountryNames(result.data.map((country) => country.name.common));
      });
  }, []);

  useEffect(() => {
    setFoundCountryNames(
      countryNames.filter((countryName) =>
        countryName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    if (foundCountryNames.length === 1) {
      setCountryToShow(foundCountryNames[0]);
    }
  }, [foundCountryNames]);

  useEffect(() => {
    if (countryToShow) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryToShow}`)
        .then((result) => {
            setCountryData(result.data)
            console.log(result.data)
        })
        .catch((error) => console.log(error))
    }
    else {
      setCountryData(null)
    }
  }, [countryToShow]);

  const showCountry = (selectedCountry) => {
    setCountryToShow(selectedCountry);
  };

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    if (countryToShow)
    {
      setCountryToShow(null)
    }
  };

  return (
    <div className="pageContent">
      <SearchBar handleChange = {updateSearchTerm} />
      
      <CountryList
        foundCountries={foundCountryNames}
        searchTerm={searchTerm}
        showCountry={showCountry}
        countryToShow = {countryToShow}
      />
      <CountryData country={countryData} />
    </div>
  );
};

export default App;
