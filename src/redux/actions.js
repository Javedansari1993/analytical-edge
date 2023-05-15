// actions.js

export const commentsData = (data) => ({
    type: 'SET_COMMENT_DATA',
    payload: data,
  });

  export const postsData = (data) => ({
    type: 'SET_POST_DATA',
    payload: data,
  });
  
  export const usersData = (data) => ({
    type: 'SET_USER_DATA',
    payload: data,
  });

  // export const commentData = (data) => ({
  //   type: 'SET_DATA',
  //   payload: data,
  // });