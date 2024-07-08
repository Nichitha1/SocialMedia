const EmptyMsg = ({onGetPostsClick}) => {
  return (
    <center>
      <h1>No Posts! CreatePOst to add Posts.</h1>
      <button type="button" className="btn btn-outline-info"
      onClick={onGetPostsClick}>
        Get Posts From Server
      </button>
    </center>
  );
};
export default EmptyMsg;
