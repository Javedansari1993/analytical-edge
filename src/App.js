import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchPosts, fetchComments } from "./fatchApi";
import { commentsData, postsData, setPageCount, usersData } from "./redux/actions";
import DataGrid from "./components/DataGrid";
import Pagination from "./components/Pagination";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchWord, setSearchWord] = useState("");
    const [isData, setIsData] = useState("users");

    const dispatch = useDispatch();
    const commentData = useSelector((state) => state.commentData);
    const postData = useSelector((state) => state.postData);
    const userData = useSelector((state) => state.userData);
    const totalCount = useSelector((state) => state.pageCount)
    const totalPage = totalCount / 10
    const cache = useSelector((state) => state.cache)
    // let tatolPage = Math.ceil( postData.length/ 10);
    // console.log("post", commentData)
    // console.log("is", isData)

    useEffect(() => {
        if (isData === "users") {
            const key = 'users_' + currentPage
            if (cache[key]) {
                dispatch(usersData(cache[key]))
            }
            else {
                fetchUsers(dispatch, setIsData, currentPage);
            }
        } else if (isData === "posts") {
            const key = 'posts_' + currentPage
            if (cache[key]) {
                dispatch(postsData(cache[key]))
            }
            else {
                fetchPosts(dispatch, setIsData, currentPage);
            }
            
        } else if (isData === "comments") {
            const key = 'comments_' + currentPage
            if (cache[key]) {
                dispatch(commentsData(cache[key]))
            }
            else {
                fetchComments(dispatch, setIsData, currentPage);
            }
           
        }
    }, [currentPage]);
    const handleFilter = () => {
        let filterArr;
        if (isData === "users") {
            filterArr = userData?.filter((item) => {
                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(searchWord.toLowerCase());
            });
            dispatch(usersData(filterArr));
        } else if (isData === "posts") {
            filterArr = postData?.filter((item) => {
                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(searchWord.toLowerCase());
            });
            dispatch(postsData(filterArr));
        } else if (isData === "comments") {
            filterArr = commentData?.filter((item) => {
                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(searchWord.toLowerCase());
            });
            dispatch(commentsData(filterArr));
        }
    };
    const columns =
        isData === "users"
            ? ["id", "name", "email"]
            : isData === "posts"
            ? ["id", "title"]
            : ["id", "name", "email", "body"];
    const sortByColumn = (column) => {
        let data =
            isData === "posts"
                ? postData
                : isData === "users"
                ? userData
                : isData === "comments"
                ? commentData
                : null;

        const sortedData = [...data].sort((a, b) => {
            const valueA = a[column];
            const valueB = b[column];

            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        });

        const isAscending = JSON.stringify(sortedData) === JSON.stringify(data);

        const sortedDataFinal = isAscending ? sortedData.reverse() : sortedData;

        if (isData === "users") {
            dispatch(usersData(sortedDataFinal));
        } else if (isData === "posts") {
            dispatch(postsData(sortedDataFinal));
        } else if (isData === "comments") {
            dispatch(commentsData(sortedDataFinal));
        }
    };

    console.log('currentPage' , currentPage , cache)
    return (
        <div className="container">
            <div className="my-3">
                <div className="d-md-flex gap-5">
                    <div className="d-flex gap-4 justify-content-center justify-content-md-start my-2">
                        <button
                            className={`${
                                isData === "users"
                                    ? "btn btn-primary"
                                    : "btn btn-outline-primary"
                            }`}
                            onClick={() => {
                                setCurrentPage(1);
                                fetchUsers(dispatch, setIsData, 1)
                            }}
                        >
                            Users
                        </button>
                        <button
                            className={`${
                                isData === "posts"
                                    ? "btn btn-primary"
                                    : "btn btn-outline-primary"
                            }`}
                            onClick={() => {
                                setCurrentPage(1);
                                fetchPosts(dispatch, setIsData, 1)
                            }}
                        >
                            Posts
                        </button>
                        <button
                            className={`${
                                isData === "comments"
                                    ? "btn btn-primary"
                                    : "btn btn-outline-primary"
                            }`}
                            onClick={() =>{
                                setCurrentPage(1);
                                fetchComments(dispatch, setIsData, 1)
                            }}
                        >
                            Comments
                        </button>
                    </div>
                    <div className="d-flex gap-1 justify-content-center justify-content-md-start my-2">
                        <input
                            type="text"
                            className="p-1 px-2"
                            value={searchWord}
                            onChange={(event) =>
                                setSearchWord(event.target.value)
                            }
                        />
                        <button
                            className="btn btn-primary mx-2"
                            onClick={() => handleFilter()}
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead className="my-4">
                    <tr>
                        {columns.map((column, index) => (
                            <td key={index}>
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => sortByColumn(column)}
                                >
                                    sortBy{column}
                                </button>
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <DataGrid
                        dataGrid={
                            isData === "posts"
                                ? postData
                                : isData === "users"
                                ? userData
                                : isData === "comments"
                                ? commentData
                                : null
                        }
                        isData={isData}
                    />
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;
