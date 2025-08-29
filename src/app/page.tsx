import Link from "next/link";

import { getPosts } from "@/actions/posts";
import Footer from "@/components/Footer";
import CurrentDate from "@/components/CurrentDate";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#f7f3e9] text-[#1a1a1a]">
      <header className="mx-auto max-w-6xl px-6 pt-10 pb-6 select-none">
        <div className="text-center">
          <div className="mx-auto mb-3 h-1 w-24 bg-[#1a1a1a]" />
          <h1 className="font-serif text-5xl sm:text-7xl tracking-wide [font-variant:small-caps]">
            The Daily Wizard
          </h1>
          <p className="mt-2 text-sm tracking-widest text-[#4a4a4a]">
            Established 1692 • London, UK • Special Edition
          </p>
          <div className="mx-auto mt-3 h-1 w-24 bg-[#1a1a1a]" />
        </div>
      </header>

      {/* Dateline and ticker */}
      <div className="border-y border-[#1a1a1a]/30 bg-[#efe7d6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 text-xs tracking-widest">
          <CurrentDate />
          <span className="flex-1 overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-[scroll_30s_linear_infinite]">
              ⚡️ Breaking: Ministry confirms Muggle-safe blog experiment •
              Quidditch season begins • New spells discovered in the codebase •
              Stay tuned for more posts... ⚡️
            </span>
          </span>
          <span>1 Knut</span>
        </div>
      </div>

      {/* Front page layout */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        {posts.length === 0 && (
          <p className="text-center italic text-[#4a4a4a]">
            No posts yet. Check back later!
          </p>
        )}

        {posts.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Lead story */}
            <article className="md:col-span-2 border-2 border-[#1a1a1a] bg-[#fffdf7] shadow-[0_0_0_4px_#fffdf7,0_0_0_5px_#1a1a1a] p-6">
              <Link
                prefetch={true}
                href={`/posts/${posts[0].slug}`}
                className="group"
              >
                <h2 className="font-serif text-3xl sm:text-4xl leading-tight group-hover:underline">
                  {posts[0].title}
                </h2>
                <p className="mt-3 text-[#2a2a2a] text-lg">
                  {posts[0].excerpt}
                </p>
                <div className="mt-4 h-[2px] w-24 bg-[#1a1a1a]" />
                <p className="mt-4 text-sm text-[#4a4a4a]">
                  Continue reading →
                </p>
              </Link>
            </article>

            {/* Sidebar teasers */}
            <aside className="space-y-6">
              {posts.slice(1, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="block border border-[#1a1a1a]/40 bg-[#fffdf7] p-4 hover:shadow-lg"
                >
                  <h3 className="font-serif text-xl">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#4a4a4a]">{post.excerpt}</p>
                </Link>
              ))}
            </aside>
          </div>
        )}

        {/* Multi-column index below */}
        {posts.length > 0 && (
          <div className="mt-10 border-t border-dashed border-[#1a1a1a]/30 pt-8">
            <h3 className="mb-4 text-center font-serif text-2xl tracking-wide">
              Latest Reports
            </h3>
            <ul className="[column-fill:balance]_md:columns-2 lg:columns-3 [column-gap:2.25rem]">
              {posts.map((post) => (
                <li key={post.id} className="mb-6 break-inside-avoid">
                  <Link href={`/posts/${post.slug}`} className="group block">
                    <span className="font-serif text-xl leading-snug group-hover:underline">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-sm text-[#4a4a4a]">
                      {post.excerpt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </main>
  );
}
