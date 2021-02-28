import React from 'react';
import DownIcon from '../utils/DownIcon';
import UpIcon from '../utils/UpIcon';

function Table({ listUsers, handleSortColunm, directionSort }) {
  const [isField, setIsField] = React.useState('');

  const Arrow = () => {
    return (
      directionSort ? <UpIcon /> : <DownIcon />
    );
  };

  const fieldSortColunm = (field) => {
    handleSortColunm(field);
    setIsField(field);
  };

  return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => {fieldSortColunm('id')}}>
              id 
              {isField === 'id' ? <Arrow /> : null}
            </th>
            <th onClick={() => {fieldSortColunm('firstName')}}>
              firstName 
              {isField === 'firstName' ? <Arrow /> : null}
            </th>
            <th onClick={() => {fieldSortColunm('lastName')}}>
              lastName 
              {isField === 'lastName' ? <Arrow /> : null}
            </th>
            <th onClick={() => {fieldSortColunm('email')}}>
              email 
              {isField === 'email' ? <Arrow /> : null}
            </th>
            <th onClick={() => {fieldSortColunm('phone')}}>
              phone 
              {isField === 'phone' ? <Arrow /> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Table;
