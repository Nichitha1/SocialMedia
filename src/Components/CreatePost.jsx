import { useRef,useContext } from "react";
import { PostList } from "../Store/postList-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList);

  const userIDElement = useRef();
  // const passwordElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userID = userIDElement.current.value;
    // const password = passwordElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split('');

    titleElement.current.value="";
    userIDElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
    fetch("https://dummyjson.com/posts", {
      method : "POST",
      headers : {"Content-type" : "application/json" },
      body : JSON.stringify({ 
        id: Date.now(),
        title: title,
        body: body,
        reactions: reaction,
        userId: userID,
        tags: tags,
      }
      ),
    }).then((res) => res.json()).then(console.log);


     addPost(userID, title, body, reaction, tags);

    // fetch()

  }
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            Email address
          </label>
          <input
            type="text"
            ref={userIDElement}
            className="form-control"
            id="userID"
            />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={passwordElement}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            rows="4"
            ref={titleElement}
            className="form-control"
            id="title"
            placeholder="Eg : Going to Mumbai"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <input
            type="text"
            rows="3"
            ref={bodyElement}
            className="form-control"
            id="body"
            placeholder="Tell us moew about your Experience!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reaction 
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reactions"
            aria-describedby="Number of people reacted"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            aria-describedby="Define some instances!"
          />
        </div>

      

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary"
        onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
export default CreatePost;
