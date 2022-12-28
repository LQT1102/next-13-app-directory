import Link from "next/link";
import React, { use, useEffect } from "react";
import { getPosts } from "../../api/posts/postApi";

type Props = {};

const PostIndexPage = (props: Props) => {
    const { posts } = use(getPosts());

    return (
        <div>
            <div>PostIndexPage</div>
            <ul>
                {posts?.map((p: any) => {
                    return (
                        <li key={p.id}>
                            <Link prefetch={false} href={`/posts/${p.id}`}>
                                {p.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PostIndexPage;
