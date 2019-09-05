import React from 'react';

import { useDebounce, useDidUpdate } from '../../hooks';


const SearchInput = (props) => {
  const {
    query,
    classPrefix,
    onChange,
    setQuery,
    stopSearch,
    startSearch,
    inputRef,
    ...inputProps
  } = props;

  useDidUpdate(() => {
    if (query.length === 0) {
      stopSearch();
    }
  }, [query]);

  const handleSearch = () => {
    if (query.length >= 2) {
      startSearch(query);   // searchOption means some additional param to search function
    }
  }

  const onInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setQuery(e.target.value)
  }

  useDebounce(handleSearch, 300, query);

  return (
    <input
      autoComplete="off"
      className={classPrefix + "__search-input"}
      maxLength="20"
      placeholder="Search"
      tabIndex="0"
      type="search"
      value={query}
      ref={inputRef}
      onChange={onInputChange}
      {...inputProps}
    />
  );
}

export default React.memo(SearchInput);
