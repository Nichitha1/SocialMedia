import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import {PostList} from "../Store/postList-store";

function Post({ post }) {
  const {deletePost} = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        {/* <h5 className="card-title">
        {post.title}</h5> */}
        <h5 type="button" className="btn btn-dark position-relative">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
           <span> {post.reactions} </span>
           <SlLike />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span 
          key={tag}
          className="badge text-bg-primary tags">{tag}</span>
        ))}
        <span  
        type="button"
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={()=> deletePost(post.id)}>
        <MdDelete />
          </span>

      </div>
    </div>
  );
}
export default Post;
