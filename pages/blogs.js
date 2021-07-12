
import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import {getPosts} from"$/utils/api/blog";
import truncate from "truncate-html";
import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')

 export async function getStaticProps({locale}) {

   const posts = await  getPosts({locale});
   if(posts.length === 0)
    return {
        notFound: true,
      }
   return {
     props: {posts},
     revalidate: 3600 * 1 * 24, // a day in second
   }
 }


const Blogs = ({posts}) => {
     const featuredPost = posts[0];
     const postDate = (date) => new Date(date).toLocaleDateString();

     const description = truncate(featuredPost.content, {
        length: 160,
        decodeEntities: true,
        stripTags: true,
        reserveLastWord: true,
      });


    return (

        <div className="mt-32 px-8">

            <div className="relative px-4  mb-12 pt-4">
                <div className="max-w-screen-xl mx-auto">
                <h2 className="font-display  text-secondary-500 text-4xl  mt-1 text-center font-black text-2xl group-hover:text-primary-500 transition duration-300">
                            Blog Posts
                </h2>
                </div>
            </div>
            
            <div className="relative px-8 px-4 mb-8">
                <Link href={`/blogs/${featuredPost.id}`}>
                    <a>
                    <div className="cursor-pointer flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
                        <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
                            <div className="h-64 sm:h-96 relative">
                                <AgilityImage
                                src={featuredPost.gallery[0].url}
                                className=" rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                layout="fill"
                                />
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 bg-gray-10 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
                            <div className="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
                                {featuredPost.category ? featuredPost.category.name : ''}
                            </div>
                            <div className="border-b-2 border-primary-500 w-8"></div>
                            <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                                {postDate(featuredPost.published_at)}
                            </div>
                            <h2 className="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                                {featuredPost.title}
                            </h2>
                            <ReactMarkdown remarkPlugins={[gfm]} children={description} />
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            
            <div className="relative px-4 px-8  mb-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Link href={`/blogs/${post.id}`} key={index}>
                        <a>
                            <div className="flex-col group mb-8 md:mb-0 border-2 rounded-lg">
                            <div className="relative h-64">
                                <AgilityImage
                                src={post.gallery[0].url}
                                className="rounded-t-lg"
                                layout="fill"
                                />
                            </div>
                            <div className="bg-gray-10 p-8  border-t-0 ">
                                <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                                {post.category ? post.category.name : ''}
                                </div>
                                <div className="border-b-2 border-primary-500 w-8"></div>
                                <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                                {postDate(post.published_at)}
                                </div>
                                <h2 className="text-secondary-500 mt-1 font-black text-1xl group-hover:text-primary-500 transition duration-300">
                                {featuredPost.title}
                                </h2>
                            </div>
                            </div>
                        </a>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Blogs;