const SearchBox = (props) => {
    return (
      <div>
        find countries: 
        <input onChange={props.inputChanged} value={props.searchTerm}></input>
      </div>
    );
  };

  export default SearchBox