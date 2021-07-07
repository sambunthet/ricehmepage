
import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import Footer from '../components/Footer';
import Navbar from "../components/navbar";
import {getPosts} from"../utils/api/blog";
import {getFullUrl} from"../utils/image/getFullUrl"


 export async function getStaticProps(context) {

   const posts = await  getPosts();



   console.log("posts:: ", posts)
 
   return {
     props: {posts},
   //   revalidate: 3600 * 1 * 24, // a day in second
   }
 }


const Blogs = ({posts}) => {
    
   console.log("clients:: ", posts)

     const featuredPost = posts[0];

    return (

        <div>
            <div className="relative px-8 mb-8">
                <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
                    <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
                    <Link href={`/blogs/1`}>

                        <a className="cursor-pointer">
                           image {getFullUrl(featuredPost.gallery[0].url)}
                        <div className="h-64 sm:h-96 relative">
                            <AgilityImage
                            src={getFullUrl(featuredPost.gallery[0].url)}
                            className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                            layout="fill"
                            />
                        </div>
                        </a>
                    </Link>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
                    <Link href={`/blogs/1`}>
                        <a className="cursor-pointer">
                        <div className="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
                            {featuredPost.category.name}
                        </div>
                        <div className="border-b-2 border-primary-500 w-8"></div>
                        {/* <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                            {dateStr}
                        </div> */}
                        <h2 className="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                            {featuredPost.title}
                        </h2>
                        <p className="text-sm mt-3 leading-loose text-gray-600 font-medium">
                                Virtual tours can open up amazing and awe-inspiring locations around the world that may otherwise be inaccessible to you. You can experience the majesty of the Sistine Chapel, the wonder of the Great Wall of China, or the beauty of Hawaii from the comfort of your own home.
                        </p>
                        </a>
                    </Link>
                    </div>
                </div>
            </div>
            
            <div className="relative px-8 mb-12">
            <div className="max-w-screen-xl mx-auto">
                <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* {posts.map((post, index) => (
                    <Link href="blogs/1" key={index}>
                    <a>
                        <div className="flex-col group mb-8 md:mb-0">
                        <div className="relative h-64">
                            <AgilityImage
                            src={post.fields.image.url}
                            alt={post.imageAlt}
                            className="object-cover object-center rounded-t-lg"
                            layout="fill"
                            />
                        </div>
                        <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                            <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                            {post.fields.category.fields.title}
                            </div>
                            <div className="border-b-2 border-primary-500 w-8"></div>
                            <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                            {post.fields.date}
                            </div>
                            <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                            {post.fields.title}
                            </h2>
                        </div>
                        </div>
                    </a>
                    </Link>
                ))} */}
                </div>
            </div>
            </div>
        </div>
      );
}

// const BlogsExport = () => {
//    return (
//       <div>
//          <Navbar />
//          <Blogs />
//          <Footer />
//     </div>
//    );
// }
 
export default Blogs;