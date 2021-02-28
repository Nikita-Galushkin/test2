import React from 'react';
import Search from './Search';
import Table from './Table';
import Paginator from './Paginator';
import data from '../utils/data';

function App() {
  const [listUsers, setListUsers] = React.useState([]);
  const [filterListUsers, setFilterListUsers] = React.useState([]);
  const [directionSort, setDirectionSort] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [isDisabledNext, setIsDisabledNext] = React.useState('');
  const [isDisabledPrev, setIsDisabledPrev] = React.useState('');
  const [isActivePage, setIsActivePage] = React.useState('');

  const [totalRow, setTotalRow] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const limitRow = 50;

  React.useEffect((() => {
      setListUsers(data);
      setFilterListUsers(data);
  }), []);

  function handleSearch(searchValue) {
    if (searchValue==='') {
      return listUsers;
    };
    const resultFilterListUsers = listUsers.filter((item) => {
      return item['firstName'].toLowerCase().includes(searchValue)
      || item['lastName'].toLowerCase().includes(searchValue)
      || item['email'].toLowerCase().includes(searchValue);
    });
    setFilterListUsers(resultFilterListUsers);
  };

const lastRow = currentPage * limitRow;
const firstRow = lastRow - limitRow;
const currentRows = filterListUsers.slice(firstRow, lastRow);

  React.useEffect((() => {
    setTotalRow(listUsers.length);
    const getTotalPage = Math.ceil(totalRow/limitRow);
    setTotalPage(getTotalPage);
  }), [totalRow, listUsers]);
  
  function handleSortColunm(field) {
    const newData = filterListUsers.concat();
    let sortData;
    if (directionSort) {
      sortData = newData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    } else {sortData = newData.sort((a, b) => {
        return a[field] < b[field] ? 1 : -1;
      });
    }
    setFilterListUsers(sortData);
    setDirectionSort(!directionSort);
  };

  function handleCurrentPage(page) {
    setCurrentPage(page);
    setIsDisabledPrev('');
    setIsDisabledNext('');
    setIsActivePage('active');
  };

  function onNextClick() {
    if (currentPage > totalPage - 1) {
      setIsDisabledNext('disabled');
    } else {
      setCurrentPage(currentPage + 1);
      setIsDisabledPrev('');
    };
  };

  function onPreviousClick() {
    if (currentPage < 2) {
      setIsDisabledPrev('disabled');
    } else {
      setCurrentPage(currentPage - 1);
      setIsDisabledNext('');
    };
  };

  return (
    <div className="container">
      <Search 
        handleSearch={handleSearch}
      />
      <Table 
        listUsers={currentRows}
        handleSortColunm={handleSortColunm}
        directionSort={directionSort}
      />
      <Paginator 
        totalPage={totalPage}
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage}
        onNextClick={onNextClick}
        onPreviousClick={onPreviousClick}
        isDisabledNext={isDisabledNext}
        isDisabledPrev={isDisabledPrev}
        isActivePage={isActivePage}
      />
    </div>
  );
}

export default App;
