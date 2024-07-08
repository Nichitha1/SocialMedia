import { useContext, useState } from "react";
import Post from "./Post";
import { PostList } from "../Store/postList-store";
import EmptyMsg from "./EmptyMsg";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ListOfPosts = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const [dataFetched, setDataFetched]= useState(false);
  const [fetching, setFetching] = useState(false);

  if(!dataFetched){
  const handleGetPostsClick = () =>
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    setDataFetched(true);
    return () => {
      console.log("Cleaning up space");
      controller.abort(); //error but we did for cleaning our space internal space!
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <EmptyMsg
        onGetPostsClick={handleGetPostsClick}
        />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      ;
    </>
  );
};
}
export default ListOfPosts;
