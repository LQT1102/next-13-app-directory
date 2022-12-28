import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head />
            <body>
                <nav style={{ backgroundColor: "#cee7d3" }}>
                    <div>Root Nav</div>
                    <ul>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/posts"}>Post index</Link>
                        </li>
                    </ul>
                </nav>
                <div>{children}</div>
            </body>
        </html>
    );
}
