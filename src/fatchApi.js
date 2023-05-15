// api.js
import { commentsData, postsData, usersData } from "./redux/actions";

// Fetch users from the API
export const fetchUsers = async (dispatch,setIsData,currentPage) => {
  const pageLimit = 10;
  let start = (currentPage-1)*pageLimit
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${pageLimit}`);
      const users = await response.json();
      setIsData('users')
      dispatch(usersData(users))
      return users;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  };
  
  // Fetch posts from the API
  export const fetchPosts = async (dispatch,setIsData,currentPage) => {
    const pageLimit = 10;
  let start = (currentPage-1)*pageLimit
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageLimit}`);
      const posts = await response.json();
      setIsData('posts')
      dispatch(postsData(posts))
      return posts;
    } catch (error) {
      throw new Error('Failed to fetch posts');
    }
  };
  
  // Fetch comments from the API
  export const fetchComments = async (dispatch,setIsData,currentPage) => {
    const pageLimit = 10;
    let start = (currentPage-1)*pageLimit
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${pageLimit}`);
      const comments = await response.json();
      setIsData('comments')
      dispatch(commentsData(comments))
      return comments;
    } catch (error) {
      throw new Error('Failed to fetch comments');
    }
  };
  