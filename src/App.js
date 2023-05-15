import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchPosts, fetchComments } from "./fatchApi"; // Assuming you have separate API functions for each endpoint
import { commentsData, postsData, usersData } from "./redux/actions";
import DataGrid from "./components/DataGrid";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchWord, setSearchWord] = useState("");
    const [isData, setIsData] = useState("users");

    const dispatch = useDispatch();
    const commentData = useSelector((state) => state.commentData);
    const postData = useSelector((state) => state.postData);
    const userData = useSelector((state) => state.userData);
    // let tatolPage = Math.ceil( postData.length/ 10);
    // console.log("post", commentData)
    // console.log("is", isData)

    useEffect(() => {
        if (isData === "users") {
            fetchUsers(dispatch, setIsData, currentPage);
        } else if (isData === "posts") {
            fetchPosts(dispatch, setIsData, currentPage);
        } else if (isData === "comments") {
            fetchComments(dispatch, setIsData, currentPage);
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
    return (
        <div>
            <input type="text" value={searchWord} />
            <button onClick={() => handleFilter()}>Filter</button>
            <table>
                <thead>
                    <tr>
                        <button onClick={() => fetchUsers(dispatch, setIsData)}>
                            Users
                        </button>
                        <button onClick={() => fetchPosts(dispatch, setIsData)}>
                            Posts
                        </button>
                        <button
                            onClick={() => fetchComments(dispatch, setIsData)}
                        >
                            Comments
                        </button>
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
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)}>
                    Previous
                </button>
                <span>{currentPage}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
