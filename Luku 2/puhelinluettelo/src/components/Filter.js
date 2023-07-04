const Filter = (props) => {
    return (
      <div>
        {props.text}
        <input value={props.searchTerm} onChange={props.action} />
      </div>
    );
  };

export default Filter;