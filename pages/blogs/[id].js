
import React from "react";
import { renderHTML } from "@agility/nextjs";
import { AgilityImage } from "@agility/nextjs";
import Footer from '../../components/Footer';
import Navbar from "../../components/navbar";

const BlogDetail = () => {

    const post = {
        "contentID":112,
        "properties":{
           "state":2,
           "modified":"2021-03-31T10:36:55.837",
           "versionID":884,
           "referenceName":"posts",
           "definitionName":"Post",
           "itemOrder":1
        },
        "fields":{
           "title":"Travel Photography Tips: 101",
           "slug":"travel-photography-101",
           "date":"2021/03/23",
           "category":{
              "contentID":109,
              "properties":{
                 "state":2,
                 "modified":"2021-03-23T09:24:14.623",
                 "versionID":708,
                 "referenceName":"categories",
                 "definitionName":"Category",
                 "itemOrder":0
              },
              "fields":{
                 "title":"Travel Tips"
              }
           },
           "image":{
              "label":"Travel Photography 101",
              "url":"https://cdn.aglty.io/nzrhpmtb/posts/travel-photography_20210331143648_0.jpg",
              "target":null,
              "filesize":293833,
              "pixelHeight":"2048",
              "pixelWidth":"2048",
              "height":2048,
              "width":2048
           },
           "content":"\u003cp class=\"\"\u003ePhotographs are often the best souvenir of your travels. But the worst thing is when they come out blurry, blown out, or just not all that exciting to look at.\u003c/p\u003e\r\n\u003cp class=\"\"\u003eIf you want to learn how to take better pictures on your travels around the world, this article is packed with everything you need to improve your photography skills.\u003c/p\u003e\r\n\u003ch2\u003e1. Set your camera to shoot in burst mode\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/whale-watching.jpg\" alt=\"Whale Watching\" /\u003e\u003c/p\u003e\r\n\u003cp class=\"\"\u003eSetting your camera to \"burst\" mode means that several shots will be taken with a single click of the shutter. This is especially helpful when you\u0026rsquo;re trying to take an action shot, like a whale breaching the water\u0026rsquo;s surface.\u0026nbsp;\u003c/p\u003e\r\n\u003cp class=\"\"\u003eAlso, burst mode is a good idea when handing your camera to a stranger to take your photo. You will get several to choose from, instead of just one where you\u0026rsquo;re blinking and someone is photo-bombing in the background. I always have my camera set in burst mode so we can choose our favorite photo from a series.\u0026nbsp;\u003c/p\u003e\r\n\u003ch2\u003e2. Carry a small tripod\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/beach-sunset.jpeg\" alt=\"Beach Sunset\" /\u003e\u003c/p\u003e\r\n\u003cp class=\"\"\u003eA tripod will seriously up your photo-taking game. There are several reasons for this but one of the main reasons we carry a tripod is so we can get shots of epic landscapes with ourselves in the picture.\u0026nbsp;\u003c/p\u003e\r\n\u003cp class=\"\"\u003eIf you're in a remote location, there might not be anyone around to take your photo. And even when there are tons of people around, they might not take shots you\u0026rsquo;re happy with. \u0026nbsp;\u003c/p\u003e\r\n\u003cp class=\"\"\u003eWhen you travel with a tripod, you can always get a great photo of yourself because you are in control.\u003c/p\u003e\r\n\u003ch2\u003e3. Shoot early and late\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/kyoto-sunset.jpeg\" alt=\"Kyoto Sunset\" /\u003e\u003c/p\u003e\r\n\u003cp class=\"\"\u003eNo matter how talented of a photographer you may be, there are certain times of the day where your shot just won\u0026rsquo;t look as good. For instance, during the middle of the day when the sun is at its peak in the sky, the light is harsh and your photos will tend to have strong shadows. Instead, aim to take photos when the sun is low in the sky and it'll cast a warm glow instead of harsh white light.\u003c/p\u003e\r\n\u003cp class=\"\"\u003eThe most ideal times of the day to take photos are in the morning just after sunrise, and during that magical \u0026ldquo;golden hour\u0026rdquo; just before sunset. Try to arrive at locations you want to shoot during these times. Of course there are many times when you can\u0026rsquo;t arrive at the ideal time, but it\u0026rsquo;s a good rule to follow whenever possible.\u003c/p\u003e\r\n\u003ch2\u003e4.\u0026nbsp; Don\u0026rsquo;t be afraid of a little rain (or clouds!)\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/raindrop-flowers.jpeg\" alt=\"Rain Droplets on Flowers\" /\u003e\u003c/p\u003e\r\n\u003cp class=\"\"\u003eCloudy days can sometimes be disappointing when you\u0026rsquo;re on vacation, but they often make for the most interesting photos. Clouds soften the sun\u0026rsquo;s light, acting like a natural light box, and make it possible for you to get great shots even in the peak of the afternoon. They can also create a cool, moody effect and can make your pictures more interesting than if you have a clear blue sky.\u0026nbsp;\u003c/p\u003e\r\n\u003cp class=\"\"\u003eMuch the same, many people get nervous to take their camera out in the rain. But rainy shots can be super interesting.\u003c/p\u003e\r\n\u003ch2\u003e5. Get a different perspective\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/taj-mahal-unique-prespective.jpeg\" alt=\"Taj Mahal Unique Prespective\" /\u003e\u003c/p\u003e\r\n\u003cp class=\"\"\u003eIt can be a good idea to get inspiration by searching online for famous shots of iconic places. For instance, a quick Google search of \u0026ldquo;Taj Mahal\u0026rdquo; will show you the most famous angles this landmark is shot from.\u0026nbsp;\u003c/p\u003e\r\n\u003cp class=\"\"\u003eBut in order to really improve your photography skills, do the OPPOSITE. When everybody is taking pictures to the right, turn left. Look up. Look down. Don\u0026rsquo;t be afraid to get down on the ground and shoot from below.\u003c/p\u003e\r\n\u003cp class=\"\"\u003eWalk to a less crowded side of the landmark and take a picture from that lesser-seen angle, like the photo of the Taj Mahal above.\u003c/p\u003e\r\n\u003cp class=\"\"\u003e\u003ca href=\"https://www.twowanderingsoles.com/blog/32-easy-creative-travel-photography-tips\" target=\"_blank\" rel=\"noopener\"\u003eArticle Source\u003c/a\u003e\u003c/p\u003e",
           "categoryID":"109"
        },
        "seo":null
     };

    const category = post.fields.category?.fields.title || "Uncategorized";

    // format date
    const dateStr = new Date(post.date).toLocaleDateString();

    return (
        <div className="relative px-8 pt-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="h-64 md:h-96 relative">
              <AgilityImage
                src={post.fields.image.url}
                className="object-cover object-center rounded-lg"
                layout="fill"
              />
            </div>
            <div className="max-w-2xl mx-auto mt-4">
              <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
              {post.fields.category.fields.title}
              </div>
              <div className="border-b-2 border-primary-500 w-8"></div>
              <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                {post.fields.date}
              </div>
              <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
                {post.fields.title}
              </h1>
              <div
                className="prose max-w-full mb-20"
                dangerouslySetInnerHTML={renderHTML(post.fields.content)}
              />
            </div>
          </div>
        </div>
      );
}

const BlogsExport = () => {
  return (
     <div>
        <Navbar />
        <BlogDetail />
        <Footer />
   </div>
  );
}
 
export default BlogsExport;