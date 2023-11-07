const SearchBar = ({handleChange}) => {

    return (
        <section className="searchBar">
        <span>Find countries: </span><input onChange={handleChange}></input>
        </section>
    )
}

export default SearchBar