import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  addInitialPosts : () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let updatedTodos = currPostList;
  if (action.type === "DELETE_POST") {
    updatedTodos = currPostList.filter(
      (postI) => postI.id !== action.payload.item
    );
  } else if (action.type === "ADD_POST") {
    updatedTodos = [action.payload, ...[]];
  }
  else if(action.type === "ADD_INITIAL_POST")
    {
      updatedTodos = action.payload.posts;
    }
  // DEFAULT_POSTLIST = updatedTodos;
  return updatedTodos;
};

const PostListProvider = ({ children }) => {
  //there will be many posts. so, we are using useReducer!
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userID, title, body, reaction, tags) => {
    // console.log(`${userID} ${password}${title} ${body} ${reaction} ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reaction,
        userId: userID,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type : "ADD_INITIAL_POST",
      payload : {
        posts : posts,
      },
    });
  }

  const deletePost = (postID) => {
    console.log(`${postID}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        item: postID,
      },
    });
    // dispatchPostList(deletePostAction);
  };

  return (
    <PostList.Provider
      value={{
        postList, //object so, wrap 2 tyms!
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POSTLIST = [
//   {
//     id: "1",
//     title: "Going to SHimla",
//     body: "Hi friends, i am going to shimla, hope to enjoy a lot!",
//     reactions: 2,
//     userId: "user-1",
//     tags: ["vacation", "Shimla", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Completed my React",
//     body: `Hi friends, I've ciompleted my react! with a struggled journey in 2 weeks!`,
//     reactions: 3,
//     userId: "user-2",
//     tags: ["smartwork", "courage", "react"],
//   },
// ];

export default PostListProvider;
