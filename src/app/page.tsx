import Link from "next/link";

import { getPosts } from "@/repositories/posts";

export default function Home() {
  const posts = getPosts();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Welcome to my Blog!</h1>
      {posts.length === 0 && <p>No posts yet. Check back later!</p>}

      {posts.length > 0 && (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.id}
              className="no-underline text-inherit"
            >
              <li className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.excerpt}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
