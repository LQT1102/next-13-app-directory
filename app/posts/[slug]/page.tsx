import { NextPage } from "next";
import Head from "next/head";
import React, { use } from "react";
import { getPost } from "../../../api/posts/postApi";

type Props = {};

const SlugPage = ({ params }: any) => {
    const id = params?.slug;
    const post = use(getPost(id));
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
            </main>
        </>
    );
};

export default SlugPage;
