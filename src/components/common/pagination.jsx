import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({
  itemsCount,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  if (pagesCount === 1) return null;
  const pagesArr = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          style={{ display: pagesCount < 1 ? "none" : "block" }}
        >
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1, pagesCount)}
          >
            Prev
          </a>
        </li>
        {pagesArr.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page, pagesCount)}
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pagesCount ? "disabled" : ""
          }`}
          style={{ display: pagesCount < 1 ? "none" : "block" }}
        >
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage + 1, pagesCount)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
