

const Country = ({ country }) => {
  if (country) {
    const languages = Object.values(country.languages);
    console.log(languages);

    return (
      <div className="found">
        <h2>{country.name.common}</h2>
        <p>
          Capital: {country.capital[0]}
          <br />
          Area: {country.area}
        </p>
        <h3>Languages:</h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}></img>
      </div>
    );
  }
};

export default Country;
