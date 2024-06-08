import React from "react";
import ReactPaginate from "react-paginate";
import "./style.scss";

function Pagination({ onChangePage, total, limit }) {
  const pagesCount = Math.ceil(total / limit);

  const onChangeList = (number) => {
    onChangePage(number.selected + 1);
    window.scrollTo(0, 0);
  }

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={onChangeList}
      pageRangeDisplayed={4}
      pageCount={pagesCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export { Pagination };
