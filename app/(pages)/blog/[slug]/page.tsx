import React from "react";

import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/interface/blog";

// export const revalidate = 30;

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
      <img
        src={urlFor(data.titleImage).url()}
        alt="Hero"
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
      />
      <h1>{data.title}</h1>
      <p>Written By: Danish Fahim </p>
      <p>Written {formatDate(data._createdAt)}</p>
      <p>Updated {formatDate(data._updatedAt)}</p>
      {data.content.map((item, index: number) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default BlogPage;
