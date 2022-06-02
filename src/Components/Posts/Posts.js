import styles from "./Posts.module.css";

const Posts = ({ postList }) => {
    console.log(postList)
    return (
        <>
            <h1 className={styles.header}>Post List</h1>
            <div className={styles.postsContainer}>

                {
                    postList.map(post =>
                        <a href={`/ssr/${post.id}`} key={post.id} className={styles.postContainer}>   
                            <div className={styles.postTitle}>{post.title}</div>
                            <div className={styles.postBody}>{post.body}</div>
                        </a>
                       )  
                }
            </div>
        </>

    );
}

export default Posts;