import Link from "next/link";
import React from "react";

const PostLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <nav style={{ backgroundColor: "#999999" }}>
                <div>Post Nav</div>
                <ul>
                    <li>
                        <Link href={"/posts"}>Post index</Link>
                    </li>
                    <li>
                        <Link href={"/posts/test"}>Post / Test</Link>
                    </li>

                    <li>
                        <Link href={"/posts/any-slug"}>Post / Any slug</Link>
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
};

export default PostLayout;
