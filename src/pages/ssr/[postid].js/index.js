import Post from "../../../Components/Post/Post"

const PostPage = (props) => {
    console.log(props)
    const { postContent, comments } = props
    return (
        <Post postContent={postContent} comments={comments} />
    )
}

export async function getServerSideProps(context) {

    const { query: { postId } } = context

    console.log(context)

    let postContent = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    postContent = await postContent.json();

    let comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    comments = await comments.json();

    return {
        props: {
            postContent,
            comments
        },
        // notFound: !postContent.id
    }
}

export default PostPage