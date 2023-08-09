export const initialState = {
  forumData: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL_DATA": {
      return { ...state, forumData: action.payload };
    }
    case "SORT_BY_DATE_CREATED": {
      const sortedByDate = [...state.forumData.posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return {
        ...state,
        forumData: { ...state.forumData, posts: sortedByDate },
      };
    }
    case "SORT_BY_UPVOTES": {
      const sortedByUpvotes = [...state.forumData.posts].sort(
        (a, b) => b.upvotes - a.upvotes
      );
      return {
        ...state,
        forumData: { ...state.forumData, posts: sortedByUpvotes },
      };
    }
    default:
      return state;
  }
};
