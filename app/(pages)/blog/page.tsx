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
    <div className="blog-page">
      <div className="blog-container container">
        {data.map((post, index) => {
          return (
            <div className="container-item blog-card-container" key={index}>
              <div className="blog-card">
                <figure className="media-container">
                  <img src={urlFor(post.titleImage).url()} alt="test-image" />
                </figure>
                <div className="content-container">
                  <h4 className="title text">{post.title}</h4>
                  {/* <p className="overview">{post.overview}</p> */}
                  <p className="overview text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus aliquet consectetur ligula, ac porta diam molestie
                    non.
                  </p>
                  <div className="card-button-container">
                    <Link href={`/blog/${post.currentSlug}`}>
                      <button className="card-button">
                        <p>Read More</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
