export const getPost = async (id: string) => {
    console.log(`Get data single page started ${id} ${new Date()}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const post = await fetch(`https://dummyjson.com/posts/${id}`);
    console.log(`Get data single page finished ${id} ${new Date()}`);
    return post.json();
};

export const getPosts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const posts = await fetch("https://dummyjson.com/posts?limit=10");
    return posts.json();
};
