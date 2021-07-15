import { AgilityImage } from "@agility/nextjs";
import useTranslation from 'next-translate/useTranslation';
import ReactMarkdown from "react-markdown";
import React from "react";
const gfm = require('remark-gfm');
import truncate from "truncate-html";



const About = (about) => {
  const { t } = useTranslation('common');
  const description = about.description || "";

  const getDescription = (description, length) => {
    const desc = truncate(description, {
        length: length,
        decodeEntities: true,
        stripTags: true,
        reserveLastWord: true,
      });

return desc;
};

  if(!description)
      return <div></div>;
  var image =  about.image.url;


  return (
    <div className='grid grid-cols-2 gap-4 p-20'>
      {/* <Link href={`/products/${product.id}`}> */}
        <a>
          <div className=''>
            <div className='pt-16 text-center'>
              <AgilityImage
                width={320}
                height={320}
                className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                src={image}
              />
            </div>
          </div>
        </a>
      {/* </Link> */}
      <div className='text-left'>
        <div className='pr-10'>
        <div className="sm:py-20 pr-10 pl-10">
          <h1 className="text-4xl pb-5 text-center font-bold pt-2 sm:pt-0">
            {t("abt")}
            <span className="text-yellow-500">{t("us")}</span>
          </h1>

          <ReactMarkdown remarkPlugins={[gfm]} className=' font-sspro font-medium text-base md:text-lg' children={getDescription(description, 350)} />
        </div>
        </div>
      </div>
    </div>
  );


  return (

    <div className="m-8 gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 sm:gap-2">
      {/* <Link href={`/products/${product.id}`}> */}
      <a>
        <div className="">
          <div className="sm:py-4 text-center mt-1 sm:mt-1 md:mt-1 lg:mt-28 xl:mt-8 2xl:mt-8">
            <AgilityImage
              width={380}
              height={380}
              className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
              src={image}
            />
          </div>
        </div>
      </a>
      {/* </Link> */}
      <div>
        <div className="sm:py-20 pr-10 pl-10">
          <h1 className="text-4xl pb-5 text-center font-bold pt-2 sm:pt-0">
            {t("abt")}
            <span className="text-yellow-500">{t("us")}</span>
          </h1>

          <ReactMarkdown remarkPlugins={[gfm]} className=' font-sspro font-medium text-base md:text-lg' children={getDescription(description, 350)} />
        </div>
      </div>
    </div>
  );


};
export default About;
