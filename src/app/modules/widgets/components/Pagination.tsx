import ReactPaginate from "react-paginate";
interface PaginationProps {
  pagesCount: number;
  setpage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, setpage }) => {
  const handlePageClick = (selectedEvent: { selected: number }): void => {
    setpage(selectedEvent.selected + 1);
  };
  return (
    <div className="pagination-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pagesCount}
        previousLabel="< "
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination justify-content-end"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
