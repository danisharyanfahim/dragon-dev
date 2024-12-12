import SearchBar from "@/app/components/layout/SearchBar";
import { simpleBlogCard } from "@/app/interface/blog";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";

export const revalidate = 30;

async function getData(category: string | null) {
  const query =
    category?.length !== 0
      ? `*[_type == "blog" && "${category?.replace(
          /(^\w{1})|(\s+\w{1})/g,
          (letter) => letter.toUpperCase()
        )}" in categories[].categoryName] | order(_createdAt desc) {
          title,
          overview, "currentSlug": slug.current,
          titleImage
        }`
      : `*[_type == "blog"] | order(_createdAt desc) {
          title,
          overview, "currentSlug": slug.current,
          titleImage
        }`;

  const data = await client.fetch(query);

  return data;
}

const Blog = async ({
  searchParams,
}: {
  searchParams?: Promise<{ category: string } | undefined>;
}) => {
  // Ensure that searchParams is resolved before using
  const { category } = (await searchParams) || undefined;

  // Fetch data based on the resolved category
  const data: simpleBlogCard[] = await getData(category ?? "");

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
