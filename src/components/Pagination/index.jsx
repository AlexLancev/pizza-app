import React from "react";
import ReactPaginate from "react-paginate";
import "./style.scss";

function Pagination({ onChangePage, limit }) {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(number) => onChangePage(number.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={parseInt(37 / limit)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export { Pagination };
