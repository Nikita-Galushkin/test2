import React from 'react';
import { Link } from 'react-router-dom';

function Paginator({ 
  totalPage, 
  handleCurrentPage, 
  currentPage, 
  onNextClick, 
  onPreviousClick, 
  isDisabledNext, 
  isDisabledPrev, 
  isActivePage }) 
  {

  let listPages = [];
  for(let i = 1; i <= totalPage; i++) {
    listPages.push(i);
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${isDisabledPrev}`}>
          <Link className="page-link" to="#" tabIndex="-1" onClick={() => {onPreviousClick()}}>Previous</Link>
        </li>
        {
          listPages.map((page, index) => {
            return (
              <li className={ currentPage=== page ? `page-item ${isActivePage}` : "page-item"} key={index}>
                <Link className="page-link" to="#" onClick={() => {handleCurrentPage(page)}}>
                  {page}
                </Link>
              </li>
            );
          })
        }
        <li className={`page-item ${isDisabledNext}`}>
          <Link className="page-link" to="#" onClick={() => {onNextClick()}}>Next</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Paginator;