const Countries = ({ countriesToShow, term, showCountry, countryToShow }) => {
  const number = countriesToShow.length;

  if (number === 1) {
    return;
  }

  if (number <= 10) {
    return (
      <div>
        {countriesToShow.sort().map((result) => (
          <div key={result.name.common}>
            {result.name.common}
            <button
              onClick={() => {
                console.log(result);
                showCountry(result);
              }}
            >
              Show
            </button>
          </div>
        ))}
      </div>
    );
  }
  if (term.length > 0) {
    return <div>Too many matches, specify another filter</div>;
  }

  return;
};

export default Countries;
