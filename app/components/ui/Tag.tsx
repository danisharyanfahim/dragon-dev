"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Tag = ({ relevance, name }: { relevance: number; name: string }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/blog?category=${name.toLowerCase()}`); // Update the URL with the new params
  };

  return (
    <button
      className={`category-tag relevance-${relevance}`}
      onClick={handleClick}
    >
      <small>{`#${name}`}</small>
    </button>
  );
};

export default Tag;
