import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { searchCounter } from "../../redux/search/reducer";
import "./style.scss";

function Search() {
  const [isSearchValue, setIsSearchValue] = useState("");
  const dispatch = useDispatch();

  const searchValue = (value) => {
    setIsSearchValue(value);
    dispatch(searchCounter(value));
  };

  return (
    <label className="search">
      <button type="button" className="search__btn">
        <CiSearch size={20} fill="#464646" className="search__icon" />
      </button>
      <input
        className="search__input"
        value={isSearchValue}
        onChange={(e) => searchValue(e.target.value)}
        type="search"
        name="search"
        placeholder="Найдём..."
      />
      {isSearchValue && (
        <button
          onClick={() => searchValue("")}
          type="button"
          className="search__btn search__btn--close"
        >
          <IoIosClose size={20} fill="#464646" className="search__icon" />
        </button>
      )}
    </label>
  );
}

export { Search };
