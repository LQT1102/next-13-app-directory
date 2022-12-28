import { use } from "react";
import { getPost } from "../../../api/posts/postApi";

export default function Head({ params }: any) {
    const id = params?.slug;
    const post = use(getPost(id));

    return (
        <>
            <title>{post.title}</title>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
}
