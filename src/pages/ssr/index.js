import Posts from "../../Components/Posts/Posts"

const PostsPage = (props) => {

    const { postList } = props

    return ( 

        <Posts postList={ postList } />
     );
}

export async function getServerSideProps() {
    let postList = await fetch("https://jsonplaceholder.typicode.com/posts");
    postList = await postList.json();

    return {
        props: { postList }
    };
}
 
export default PostsPage;