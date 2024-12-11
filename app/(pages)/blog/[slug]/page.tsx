import React from "react";

import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/interface/blog";
import CodeContainer from "@/app/components/ui/containers/CodeContainer";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
*[_type == "blog" && slug.current == "${slug}"]{
  "currentSlug": slug.current,
  title, titleImage, _createdAt, _updatedAt, categories[] | order(relevance asc) {'name': categoryName, relevance},
  content[]{
      _type == 'block' => {
        'type': 'text',
       'text': children[0].text
      }, _type == 'document' => {
        'type': 'code',
        'fileName': fileName + '.' + fileType, 'language': Code.language, 'code': Code.code
        }
        }
}[0]
    `;

  const data = await client.fetch(query);
  console.log(data);
  return data;
}

function formatDate(dateString: string) {
  const date = dateString.substring(0, dateString.indexOf("T"));
  const time = dateString.substring(
    dateString.length - 9,
    dateString.length - 4
  );
  return `${date}`;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="blog-article-container">
      <main className="blog-article">
        <figure className="image-container">
          <img
            className="hero-image"
            src={urlFor(data.titleImage).url()}
            alt="Hero"
          />
        </figure>
        <article>
          <section className="article-head">
            <h4 className="author-info">Dans - Blog</h4>
            <h1 className="title">{data.title}</h1>
            <div className="dates-container">
              <p className="date-created">
                Written: {formatDate(data._createdAt)}
              </p>
              <p className="date-updated">
                Last Updated: {formatDate(data._updatedAt)}
              </p>
            </div>
            <div className="category-container">
              {data?.categories.map((category, index) => {
                const { name, relevance } = category;
                console.log(relevance);
                return (
                  <div
                    className={`category-tag relevance-${relevance}`}
                    key={index}
                  >
                    <small>{`#${name}`}</small>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="article-body">
            {data.content.map((item, index: number) => {
              if (item.type === "text") {
                return <p key={index}>{item.text}</p>;
              } else if (item.type === "code") {
                const { language, fileName, code } = item;
                return (
                  <CodeContainer
                    key={index}
                    language={language}
                    fileName={fileName}
                    code={code}
                  ></CodeContainer>
                );
              }
            })}
          </section>
        </article>
      </main>
    </div>
  );
};

export default BlogPage;
