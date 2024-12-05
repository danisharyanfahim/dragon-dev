import React from "react";

import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/interface/blog";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
*[_type == "blog" && slug.current == "${slug}"]{
  "currentSlug": slug.current,
  title, "content": content[].children[0].text, titleImage, _createdAt, _updatedAt
}[0]
    `;

  const data = await client.fetch(query);
  return data;
}

function formatDate(dateString: string) {
  const date = dateString.substring(0, dateString.indexOf("T"));
  const time = dateString.substring(
    dateString.length - 9,
    dateString.indexOf("Z")
  );
  return `${date} ${time}`;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="blog-page" style={{ marginTop: "4rem", width: "100%" }}>
      <section className="article-info">
        <figure className="image-container">
          <img
            className="hero-image"
            src={urlFor(data.titleImage).url()}
            alt="Hero"
          />
        </figure>
        <h1 className="title">{data.title}</h1>
        <p className="author-info">Written By: Danish Fahim </p>
        <p className="date-created">Written {formatDate(data._createdAt)}</p>
        <p className="date-updated">Updated {formatDate(data._updatedAt)}</p>
      </section>
      <article className="content-container">
        {data.content.map((item, index: number) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
};

export default BlogPage;
