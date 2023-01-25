import "./search-box.styles.css";

export const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
