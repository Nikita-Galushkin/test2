import React from 'react';

function Search({ handleSearch }) {
  const [searchValue, setSearchValue] = React.useState('');

  function handleSubmitSearch(searchValue) {
    setSearchValue(searchValue);
    if(handleSearch) {
      handleSearch(searchValue);
    };
  };

  return (
    <div className="form-outline">
      <input value={searchValue} onChange={(evt) => {handleSubmitSearch(evt.target.value)}} type="search" id="form1" className="form-control" placeholder="Введите данные"
      aria-label="Search" />
    </div>
  );
}

export default Search;
