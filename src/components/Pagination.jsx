import React from "react";

const Pagination = ({currentPage, setCurrentPage, totalPage}) => {
    return (
        <div
            className={"d-flex justify-content-center align-items-center gap-3"}
        >
            <button
                className={`btn btn-sm btn-secondary ${
                    currentPage == 1 ? "disabled" : ""
                }`}
                onClick={() => setCurrentPage(+currentPage - 1)}
            >
                Previous
            </button>
            <span>
                {" "}
                Page {currentPage} of {totalPage}
            </span>
            <button
                className={`btn btn-sm btn-secondary  ${
                    totalPage == currentPage ? "disabled" : ""
                }`}
                onClick={() => setCurrentPage(+currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
