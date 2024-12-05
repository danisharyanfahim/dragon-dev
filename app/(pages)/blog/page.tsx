import { simpleBlogCard } from "@/app/interface/blog";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import React from "react";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title,
  overview, "currentSlug": slug.current,
  titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

const Blog = async () => {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="container">
      {data.map((post, index) => {
        return (
          <div className="container-item" key={index}>
            <div className="card">
              <figure className="media-container">
                <img src={urlFor(post.titleImage).url()} alt="test-image" />
              </figure>
              <div className="content-container">
                <h1 className="title">{post.title}</h1>
                <p className="overview">{post.overview}</p>
                <button className="card-button">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
