import styles from "./Post.module.css";

const Post = ({ postContent, comments }) => {
  
  return (
    <div>
        <p>{postContent.title}</p>
        <p>{postContent.body}</p>
      <div className={styles.comments}>
        {comments.map((comment) => (
          <a href={`#`} key={comment.id} >
              <p>{comment.body}</p>
                <span>Autor: {comment.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Post;
