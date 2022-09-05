import { getAllFilesMetadata } from "../lib/mdx";

export default function Home({ posts }) {
    return (
        <div >
            <head>
                <title>Blog jamstack</title>
            </head>
            <main >
                <h1 >Mi blog jamstack</h1>
                <div >
                    <a href="https://nextjs.org/docs" >
                        <h2>Documentation </h2>
                        <p>FInd.....</p>
                    </a>
                </div>
            </main>

            <footer >
                <a href="">Powered by <span ><img src=""></img></span></a>

            </footer>
            
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesMetadata();
    console.log(posts);
    return {
        props: {posts}
    }
}