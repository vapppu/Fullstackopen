import { useState, useEffect } from "react";
import axios from "axios";

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
  };


  useEffect(() => {
    const term = searchTerm;
    console.log(term);

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
    console.log(filteredCountries);
    if (filteredCountries.length === 1) {
      console.log(`ONE SINGLE COUNTRY FOUND!`);
      setCountryToShow(filteredCountries[0]);
    } else {
      setCountryToShow(null);
    }
    setCountriesToShow(filteredCountries);
  }, [searchTerm]);



  return (
    <div>
      <h1>Countries</h1>

      <SearchBox inputChanged={handleInputChange} />

      <Countries countriesToShow={countriesToShow} term={searchTerm} />

      <Country country={countryToShow} />

    </div>
  );
};

const SearchBox = (props) => {
  return (
    <div>
      find countries: 
      <input onChange={props.inputChanged} value={props.searchTerm}></input>
    </div>
  );
};

const Countries = ({ countriesToShow, term }) => {
  const number = countriesToShow.length;
  console.log(`amount is ${number}`);

  if (number === 1) return;

  if (number <= 10) {
    return (
      <div>
        {countriesToShow.sort().map((result) => (
          <div key={result.name.common}>{result.name.common}</div>
        ))}
      </div>
    );
  }
  if (term.length > 0) {
    return <div>{number} results. Give more specific search term!</div>;
  }

  return;
};

const Country = ({ country }) => {
  if (country) {
    const languages = Object.values(country.languages);
    console.log(languages);

    return (
      <div className="found">
        <h2>{country.name.common}</h2>
        <p>
          Capital: {country.capital[0]}<br/>
          Area: {country.area}
        </p>
        <h3>Languages:</h3>
        <ul>
          {languages.map((language) => (
            <li>{language}</li>
          ))}
        </ul>
        <figure className="flag">
          <img src={country.flags.png} alt={country.flags.alt}></img>
        </figure>
      </div>
    );
  }
};

export default App;
