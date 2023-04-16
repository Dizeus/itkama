import "./Post.css";




function Post({avatar,post}) {
  return (
    <div className="post">
      <img src={avatar} className="post__avatar" />
      <div className="post__content">
        <div className="post__text">{post.text}</div>
        <button className="post__like">{post.likes} &#x2764;</button>
      </div>
    </div>
  );
}

export default Post;
