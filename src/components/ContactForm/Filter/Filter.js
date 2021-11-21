import PropTypes from "prop-types";

function Filter({value, onChange}) {
    return (
    <div>
        <h3>Find contacts by name</h3>
        <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
    )
}

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;