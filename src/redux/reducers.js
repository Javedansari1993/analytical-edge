// reducers.js

const initialState = {
  commentData: null,
  postData: null,
  userData: null,
  
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMMENT_DATA':
        return {
          ...state,
          commentData: action.payload,
        };
        case 'SET_POST_DATA':
        return {
          ...state,
          postData: action.payload,
        };
        case 'SET_USER_DATA':
        return {
          ...state,
          userData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  