"use client";

export default function CurrentDate() {
  return (
    <span className="italic">
      {new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </span>
  );
}
