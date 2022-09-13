export interface BLOGS {
    blogs: BlogDetail[]
}

export interface BlogDetail {
    title: string;
    description: string;
    cover_image: string;
    published: string;
    author: string;
}