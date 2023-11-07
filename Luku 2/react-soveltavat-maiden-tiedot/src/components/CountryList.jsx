const CountryList = ({
  foundCountries,
  searchTerm,
  showCountry,
  countryToShow,
}) => {
  const countryCount = foundCountries.length;

  if (countryToShow) {
    return null;
  }

  if (countryCount === 0 && searchTerm !== "") {
    return <p>No countries found. Please specify another filter.</p>
  }

  if (countryCount > 10 && searchTerm !== "") {
    return <p>Too many search results. Please specify another filter</p>;
  } 
  
  else if (countryCount <= 10 && countryCount > 1) {
    return (
      <ul>
        {foundCountries.sort().map((country) => (
          <li key={country}>
            {country} <button onClick={() => showCountry(country)}>show</button>
          </li>
        ))}
      </ul>
    );
  }
};

export default CountryList;
