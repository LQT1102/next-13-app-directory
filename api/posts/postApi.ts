export const getPost = async (id: string) => {
    const post = await fetch(`https://dummyjson.com/posts/${id}`);
    return post.json();
};

export const getPosts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const posts = await fetch("https://dummyjson.com/posts?limit=10");
    return posts.json();
};
