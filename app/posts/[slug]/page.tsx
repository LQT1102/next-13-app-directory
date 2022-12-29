import Head from "next/head";
import { use } from "react";
import { getPost } from "../../../api/posts/postApi";

type Props = {};

const SlugPage = ({ params }: any) => {
    const id = params?.slug;
    const post = use(getPost(id));

    console.log("Revalidate");
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="title" content={post.title} />
                <meta name="description" content={post.title} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div> {id}</div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <p>
                    Revalidate time: <>{new Date() + ""}</>
                </p>
            </main>
        </>
    );
};

export async function generateStaticParams({ params: { slug } }: any) {
    return [];
}

export const dynamic = "force-static",
    revalidate = 10;

export default SlugPage;
