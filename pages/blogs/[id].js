
import React from "react";
import { renderHTML } from "@agility/nextjs";
import { AgilityImage } from "@agility/nextjs";
import {getPost} from"./../../utils/api/blog";
import {getFullUrl} from"./../../utils/image/getFullUrl";
import ReactMarkdown from 'react-markdown'
import Markdown from 'markdown-to-jsx';
const gfm = require('remark-gfm')





export const getStaticPaths = async (context) => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps(context) {

  const id = context.params.id;
  const post = await  getPost(id);



  return {
    props: {post},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}

const BlogDetail = ({post}) => {

    const dateStr = new Date(post.published_at).toLocaleDateString();

    return (
        <div className="relative px-8 pt-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="h-64 md:h-96 relative">
              <AgilityImage
                src={getFullUrl(post.gallery[0].url)}
                className="object-center rounded-lg"
                layout="fill"
              />
            </div>
            <div className="max-w-2xl mx-auto mt-4">
              <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
              {post.category.name}
              </div>
              <div className="border-b-2 border-primary-500 w-8"></div>
              <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                {dateStr}
              </div>
              <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
                {post.title}
              </h1>
              <ReactMarkdown remarkPlugins={[gfm]} children={post.content} />
            </div>
          </div>
        </div>
      );
}

export default BlogDetail;