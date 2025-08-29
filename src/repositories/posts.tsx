import { Post } from "@/types/domain";

export function getPosts(): Post[] {
  return [
    {
      id: 1,
      slug: "my-first-post",
      title: "My First Post",
      excerpt: "This is a summary of my first post.",
      content: "This is the full content of my first post.",
    },
    {
      id: 2,
      slug: "laravel-is-the-best",
      title: "Laravel is the best",
      excerpt: "This is a summary of Laravel being the best.",
      content: "This is the full content of why Laravel is the best.",
    },
    {
      id: 3,
      slug: "use-nextjs-with-laravel",
      title: "Use Next.js with Laravel",
      excerpt: "This is a summary of using Next.js with Laravel.",
      content: "This is the full content of how to use Next.js with Laravel.",
    },
  ];
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getPosts();

  return posts.find((post) => post.slug === slug) || null;
}
