"use client";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[#1a1a1a]/30 py-6 text-center text-xs text-[#4a4a4a]">
      © {new Date().getFullYear()} The Daily Wizard — An enchanted publication.
    </footer>
  );
}
