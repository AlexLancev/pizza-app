import React, { useRef, useState, useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { searchCounter } from "../../redux/search/reducer";
import debounce from "lodash.debounce";
import "./style.scss";

function Search() {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();
  
  const inCloseClear = () => {
    setValue('');
    dispatch(searchCounter(''));
    inputRef.current.focus();
  };

  const debouncedSearchValue = useCallback(
    debounce((value) => {
      dispatch(searchCounter(value));
    }, 700),
    [dispatch]
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    debouncedSearchValue(value);
  };

  return (
    <label className="search">
      <button type="button" className="search__btn" onClick={() => inputRef.current.focus()}>
        <CiSearch size={20} fill="#464646" className="search__icon" />
      </button>
      <input
        ref={inputRef}
        className="search__input"
        value={value}
        onChange={handleChange}
        type="search"
        name="search"
        placeholder="Найдём..."
      />
      {value && (
        <button
          onClick={inCloseClear}
          type="button"
          className="search__btn-close"
        >
          <IoIosClose size={20} fill="#464646" className="search__icon" />
        </button>
      )}
    </label>
  );
}

export { Search };
