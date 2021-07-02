
import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs"



const Blogs = () => {

    const posts = [
        {
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
        },
        {
           "contentID":113,
           "properties":{
              "state":2,
              "modified":"2021-04-01T10:14:26.373",
              "versionID":914,
              "referenceName":"posts",
              "definitionName":"Post",
              "itemOrder":2
           },
           "fields":{
              "title":"Am-EH-zing Places to Visit in Canada!",
              "slug":"am-eh-zing-places-to-visit-in-canada",
              "date":"2021/03/23",
              "category":{
                 "contentID":110,
                 "properties":{
                    "state":2,
                    "modified":"2021-03-23T09:24:26.82",
                    "versionID":710,
                    "referenceName":"categories",
                    "definitionName":"Category",
                    "itemOrder":1
                 },
                 "fields":{
                    "title":"Travel Guide"
                 }
              },
              "image":{
                 "label":"Visit the beautiful Alps in Switzerland",
                 "url":"https://cdn.aglty.io/nzrhpmtb/posts/canadian.jpg",
                 "target":null,
                 "filesize":143582,
                 "pixelHeight":"830",
                 "pixelWidth":"1200",
                 "height":830,
                 "width":1200
              },
              "content":"\u003cp\u003eCanada's cities and towns offer travelers a diverse choice of experiences, from chic, cosmopolitan centers to mountain resorts and maritime cities. Determining the best places to visit may depend on your interests and the type of trip you're hoping to create.\u003c/p\u003e\r\n\u003ch2 id=\"CDN-BC-BCV\" class=\"sitename\"\u003e1. Vancouver\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/vancouver.jpeg\" alt=\"Vancouver\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eFor beauty, climate, a fun atmosphere, and plenty of things to do, you can't go wrong planning a trip to Vancouver. Set on the shores of the Pacific Ocean and backed by snow-capped mountains, this is an active city, where locals enjoy the outdoors year-round.\u003c/p\u003e\r\n\u003cp\u003eSunbathers can bask on the beaches in summer, and skiers can hit the nearby ski resorts in winter. At any time of year, you can walk the seawall or stroll through the towering trees in\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.planetware.com/vancouver/stanley-park-vancouver-cdn-bc-bcvsp.htm\" target=\"_blank\" rel=\"noopener\"\u003eStanley Park\u003c/a\u003e, enjoy fine dining or a casual meal while watching the sunset, or find fabulous shopping, from the markets of\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003cb\u003eGranville Island\u003c/b\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003eto the high-end shops in the city center.\u003c/p\u003e\r\n\u003ch2 id=\"CDN-ON-ONNF\" class=\"sitename\"\u003e2. Niagara Falls\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/niagara-falls.jpeg\" alt=\"Niagara Falls\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eCanada's most famous natural attraction, the majestic Niagara Falls has been drawing sightseers almost since its discovery. The great wall of water pounding over the falls is an amazing sight, and the view and access afforded visitors is astounding. You can literally walk up to the edge of the falls, separated only by a cast-iron railing, and see the water as it disappears over the crest.\u003c/p\u003e\r\n\u003cp\u003eThe city that has developed here, also named Niagara Falls, has been greatly influenced by the people and atmosphere the falls have created. Stuntmen and daredevils have been tempting their fate on the falls throughout the decades, and as a result, a carnival-style atmosphere has come to define this unique city. Just a short drive from Toronto, Niagara Falls is easy to reach, and the city is a fun place to spend a day or two.\u003c/p\u003e\r\n\u003ch2\u003e3. Toronto\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/toronto.jpeg\" alt=\"Toronto\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eAs Canada's largest city, Toronto is the country's cultural hot spot, with ballet, opera, symphony, and Broadway shows. It's also home to the landmark\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003cstrong\u003eCN Tower\u003c/strong\u003e. Add extraordinary shopping, fine dining, and fantastic museums, and there is no end to the entertainment.\u003c/p\u003e\r\n\u003cp\u003eIn recent years, Toronto's waterfront has experienced ongoing development and now boasts beautiful walking areas, restaurants, and in summer, outdoor concerts and cultural performances.\u003c/p\u003e\r\n\u003cp\u003eJust outside the city center, in either direction from the city, are beautiful beaches, perfect on hot summer days. In winter, a public skating rink springs to life outside city hall, and unique winter events, including the popular\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003cb\u003eWinterlicious\u003c/b\u003e, add to the fun. You can find\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.planetware.com/canada/top-rated-ski-resorts-near-toronto-cdn-1-197.htm\" target=\"_blank\" rel=\"noopener\"\u003eski resorts near Toronto\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003eas well.\u003c/p\u003e\r\n\u003ch2\u003e4. Montreal\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/montreal.jpeg\" alt=\"Montreal\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eMontreal is a unique city, with a beautiful old historic district dating back to the 1600s and a modern city center with extensive underground shopping.\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003cb\u003eOld Montreal\u003c/b\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003eis the main tourist hub, with cobbled streets and fantastic old buildings.\u003c/p\u003e\r\n\u003cp\u003eMontreal is also home to a large number of fashion designers, and high-end boutiques line the historic streets, along with quaint hotels and restaurants. Located in the French-speaking\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.planetware.com/tourist-attractions-/quebec-province-cdn-qu-qu.htm\" target=\"_blank\" rel=\"noopener\"\u003eprovince of Qu\u0026eacute;bec\u003c/a\u003e, Montreal has its own cultural identity, but English-speaking visitors will have no trouble communicating with anyone in the tourist industry.\u003c/p\u003e\r\n\u003ch2\u003e5. Banff\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/banff.jpeg\" alt=\"Banff\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eThe charming mountain town of Banff, in the stunning\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003cb\u003eBanff National Park\u003c/b\u003e, is a must-visit destination for anyone looking to explore the Rocky Mountains and see some of the most beautiful scenery in Canada. This is undeniably a tourist town, catering to international travelers from all over the globe.\u003c/p\u003e\r\n\u003cp\u003eJust a short distance from the town is\u0026nbsp;Lake Louise Ski Resort\u0026nbsp;and\u0026nbsp;Sunshine Village Ski Resort, two of\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.planetware.com/canada/top-rated-ski-resorts-in-canada-cdn-1-65.htm\" target=\"_blank\" rel=\"noopener\"\u003eCanada's best ski resorts\u003c/a\u003e. In summer, the nearby turquoise lakes, including Lake Louise, and glacier-capped mountains are a glorious sight.\u003c/p\u003e\r\n\u003cp\u003eBut you don't even need to leave the town to enjoy a gondola ride to the top of a mountain for dinner, soak in a hot spring-fed pool, find fabulous shopping, discover lovely walking trails, and possibly see elk and woodland caribou that frequently make their way into town.\u003c/p\u003e\r\n\u003cp\u003e\u003ca href=\"https://www.planetware.com/canada/best-places-to-visit-in-canada-cdn-1-12.htm\" target=\"_blank\" rel=\"noopener\"\u003eArticle Source\u003c/a\u003e\u003c/p\u003e\r\n\u003cp\u003e\u003c/p\u003e",
              "categoryID":"110"
           },
           "seo":null
        },
        {
           "contentID":124,
           "properties":{
              "state":2,
              "modified":"2021-04-01T10:15:59.907",
              "versionID":916,
              "referenceName":"posts",
              "definitionName":"Post",
              "itemOrder":3
           },
           "fields":{
              "title":"Virtual Tours - Ways to Travel From Home",
              "slug":"virtual-tours-ways-to-travel-from-home",
              "date":"2021/03/23",
              "category":{
                 "contentID":110,
                 "properties":{
                    "state":2,
                    "modified":"2021-03-23T09:24:26.82",
                    "versionID":710,
                    "referenceName":"categories",
                    "definitionName":"Category",
                    "itemOrder":1
                 },
                 "fields":{
                    "title":"Travel Guide"
                 }
              },
              "image":{
                 "label":"Virtual Tour",
                 "url":"https://cdn.aglty.io/nzrhpmtb/posts/virtual-tour_20210331171226_0.jpg",
                 "target":null,
                 "filesize":279207,
                 "pixelHeight":"1542",
                 "pixelWidth":"2048",
                 "height":1542,
                 "width":2048
              },
              "content":"\u003cp\u003eVirtual tours can open up amazing and awe-inspiring locations around the world that may otherwise be inaccessible to you. You can experience the majesty of the Sistine Chapel, the wonder of the Great Wall of China, or the beauty of Hawaii from the comfort of your own home.\u003c/p\u003e\r\n\u003ch2\u003ePicking the Right Virtual Tour for You\u003c/h2\u003e\r\n\u003cp\u003eAs you consider which virtual tour you want to take, try finding one that not only helps you explore a new place, but consider a place tied to your heritage. Learning more about your cultural heritage can help you become more resilient as you develop a deeper understanding of your story.\u003c/p\u003e\r\n\u003ch2\u003e1. Vatican Museums\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/vatican-museum.jpg\" alt=\"Vatican Museum\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eThis collection of virtual tours lets you see some of the masterpieces of the Renaissance, including the Sistine Chapel, Niccoline Chapel, Raphael\u0026rsquo;s Room, and more.\u003c/p\u003e\r\n\u003cp\u003e\u003ca href=\"http://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.html\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\" (opens in a new tab)\"\u003e\u003cem\u003eStart the Tour\u003c/em\u003e\u003c/a\u003e\u003cem\u003e\u003c/em\u003e\u003c/p\u003e\r\n\u003ch2\u003e2. Great Wall of China\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/great-wall-of-china.jpg\" alt=\"Great Wall of China\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eThe Great Wall is often regarded as a wonder of the world, making it a prime tourist attraction. By taking the tour online, you can skip the crowds and still experience the incredible view and Chinese history.\u003c/p\u003e\r\n\u003cp\u003e\u003ca href=\"https://www.thechinaguide.com/destination/great-wall-of-china\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\" (opens in a new tab)\"\u003e\u003cem\u003eStart the Tour\u003c/em\u003e\u003c/a\u003e\u003c/p\u003e\r\n\u003ch2\u003e3. Louvre\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/louvre.jpg\" alt=\"Louvre\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eThe Louvre, located in Paris, is the largest art museum in the world. Three of the museum\u0026rsquo;s top exhibits are available online.\u003c/p\u003e\r\n\u003cp\u003e\u003ca href=\"https://www.louvre.fr/en/visites-en-ligne#tabs\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\" (opens in a new tab)\"\u003e\u003cem\u003eStart the Tour\u003c/em\u003e\u003c/a\u003e\u003c/p\u003e\r\n\u003ch2\u003e4. Taj Mahal\u003c/h2\u003e\r\n\u003cp\u003e\u003cimg src=\"https://cdn.aglty.io/gixkprai/posts/taj-mahal.jpg\" alt=\"Taj Mahal\" /\u003e\u003c/p\u003e\r\n\u003cp\u003eThis ivory marble mausoleum in India is one of the most famous buildings in the world. Emperor Shah Jahan had it built in 1632 for his wife Mumtaz Mahal.\u003c/p\u003e\r\n\u003cp\u003e\u003ca href=\"https://www.airpano.com/360photo/Taj-Mahal-India/\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\" (opens in a new tab)\"\u003e\u003cem\u003eStart the Tour\u003c/em\u003e\u003c/a\u003e\u003c/p\u003e\r\n\u003ch2\u003e5. Create Your Own Virtual Tour\u003c/h2\u003e\r\n\u003cp\u003e\u003cspan\u003eWith the help of\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.google.com/maps\" target=\"_blank\" rel=\"noopener\"\u003eGoogle Maps\u003c/a\u003e\u003cspan\u003e\u0026nbsp;or\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.google.com/earth/\" target=\"_blank\" rel=\"noopener\"\u003eGoogle Earth\u003c/a\u003e\u003cspan\u003e, you can explore almost any location in the world. If you need ideas of places to visit, use the opportunity to virtually\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.familysearch.org/blog/en/heritage-tourism/\" target=\"_blank\" rel=\"noopener\"\u003eexplore the places of your heritage\u003c/a\u003e\u003cspan\u003e. Traveling to understand the past and particularly your ancestors will help you gain a connection to your\u0026nbsp;\u003c/span\u003e\u003ca href=\"https://www.familysearch.org/blog/en/what-is-heritage/\" target=\"_blank\" rel=\"noopener\"\u003eheritage\u003c/a\u003e\u003cspan\u003e\u0026nbsp;and a sense of your roots.\u003c/span\u003e\u003c/p\u003e\r\n\u003cp\u003e\u003cspan\u003e\u003ca href=\"https://www.familysearch.org/blog/en/virtual-tours-travel-from-home/\" target=\"_blank\" rel=\"noopener\"\u003eArticle Source\u003c/a\u003e\u003c/span\u003e\u003c/p\u003e\r\n\u003cp\u003e\u003c/p\u003e",
              "categoryID":"110"
           },
           "seo":null
        }
     ]

     const featuredPost = posts[2];

    return (

        <div>
            <div className="relative px-8 mb-8">
                <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
                    <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
                    <Link href={`/blogs/1`}>
                        <a className="cursor-pointer">
                        <div className="h-64 sm:h-96 relative">
                            <AgilityImage
                            src={featuredPost.fields.image.url}
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
                            {featuredPost.fields.category.fields.title}
                        </div>
                        <div className="border-b-2 border-primary-500 w-8"></div>
                        {/* <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                            {dateStr}
                        </div> */}
                        <h2 className="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                            {featuredPost.fields.title}
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
                {posts.map((post, index) => (
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
                ))}
                </div>
            </div>
            </div>
        </div>
      );
}
 
export default Blogs;