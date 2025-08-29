import Link from "next/link";
import { getPostBySlug } from "@/actions/posts";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const words = post.content.split(" ");
  const pullQuote =
    words.slice(0, Math.min(16, words.length)).join(" ") +
    (words.length > 16 ? "…" : "");

  return (
    <main className="min-h-screen bg-[#f7f3e9] text-[#1a1a1a]">
      <header className="mx-auto max-w-4xl px-6 pt-10 pb-4">
        <nav className="mb-6 text-sm text-[#4a4a4a]">
          <Link href="/" className="hover:underline">
            ← Back to The Daily Wizard
          </Link>
        </nav>
        <div className="text-center">
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight tracking-wide">
            {post.title}
          </h1>
          <p className="mt-2 text-xs tracking-widest text-[#4a4a4a]">
            Edition #{post.id} •{" "}
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 pb-16">
        <div className="relative border-2 border-[#1a1a1a] bg-[#fffdf7] p-6 shadow-[0_0_0_6px_#fffdf7,0_0_0_7px_#1a1a1a]">
          {/* Decorative corners */}
          <span className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-2 border-[#1a1a1a] bg-[#f7f3e9]" />
          <span className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 border-2 border-[#1a1a1a] bg-[#f7f3e9]" />
          <span className="pointer-events-none absolute -left-3 -bottom-3 h-6 w-6 border-2 border-[#1a1a1a] bg-[#f7f3e9]" />
          <span className="pointer-events-none absolute -right-3 -bottom-3 h-6 w-6 border-2 border-[#1a1a1a] bg-[#f7f3e9]" />

          {/* Standfirst */}
          <p className="mb-6 text-center text-sm uppercase tracking-widest text-[#4a4a4a]">
            Special Report • Wizarding Affairs
          </p>

          {/* Body with dropcap and columns on large screens */}
          <div className="lg:[column-count:2] [column-gap:2.25rem] [column-fill:balance]">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85]">
              {post.content}
            </p>

            {/* Pull quote */}
            <blockquote className="my-6 break-inside-avoid border-y border-dashed border-[#1a1a1a]/40 py-4 text-center">
              <span className="mx-auto block max-w-md font-serif text-2xl leading-snug">
                “{pullQuote}”
              </span>
            </blockquote>

            {/* Repeat content continuation if long; here we just re-render for layout richness */}
            <p className="mt-4">{post.content}</p>
          </div>
        </div>
      </article>

      <footer className="border-t border-[#1a1a1a]/30 py-6 text-center text-xs text-[#4a4a4a]">
        Filed under: Enchantments • Owl Post Available on Request
      </footer>
    </main>
  );
}
