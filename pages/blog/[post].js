import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";

import { postSlugs, postForSlug } from "../../posts";

function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Attia Blog</title>
      </Head>
      <div className="w-full">
      <article className="prose max-w-none">
          <h1>{frontmatter.title}</h1>
          <p className="italic">{frontmatter.date}</p>
          <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
        </article>
      </div>
    </>
  );
}
export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
