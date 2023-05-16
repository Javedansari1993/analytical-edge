// reducers.js

const initialState = {
  commentData: null,
  postData: null,
  userData: null,
  pageCount: 1,
  cache: {}
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
        case 'SET_PAGE_COUNT':
        return {
          ...state,
          pageCount: action.payload,
        };
        case 'SET_CACHE':
          return {
            ...state,
            cache: {
              ...state.cache,
              [action.payload.key]: action.payload.value
            }
          }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  