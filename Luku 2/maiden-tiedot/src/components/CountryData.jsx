import Weather from './Weather'

const CountryData = ({ country }) => {

  if (country) {
    return (
        <section className="country">
            <h1>{country.name.common}</h1>
            <ul>
                <li>capital: {country.capital[0]}</li>
                <li>area: {country.area}</li>
                <li><figure>
                    <img src={country.flags.png} alt={country.flags.alt}></img>
                </figure>
                </li>
                <li><b>languages:</b>
                <ul>
                    {Object.values(country.languages).map((language) => <li key={language}>{language}</li>)}
                </ul></li>
            </ul>
            <Weather capital = {country.capital[0]}/>
        </section>
        );
  }
};
export default CountryData;
