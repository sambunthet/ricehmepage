import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import { getAboutUs } from "$/utils/api/about-us";
import useTranslation from "next-translate/useTranslation";
import ReactMarkdown from "react-markdown";
import React from "react";
const gfm = require('remark-gfm');

export async function getStaticProps({ locale }) {
  const about = await getAboutUs(locale);
  const description = about.description || "";

  if (!description) {
    return {
      notFound: true,
    };
  }
  return {
    props: {about},
    revalidate: 3600 * 1 * 24, // a day in second
  };
}

const AboutUs = ({about}) => {
  const { t } = useTranslation("common");
  console.log("===== ", about);
  if (!about) return <div></div>;
  var image = about.image.url;
  return (
    <div className='m-8 mt-32 gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 sm:gap-2'>
      {/* <Link href={`/products/${product.id}`}> */}
      <a>
        <div className=''>
          <div className='sm:py-4 text-center mt-1 sm:mt-1 md:mt-1 lg:mt-28 xl:mt-8 2xl:mt-8'>
            <AgilityImage
              width={640}
              height={640}
              className='h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block '
              src={image}
            />
          </div>
        </div>
      </a>
      {/* </Link> */}
      <div>
        <div className='sm:py-20'>
          <h1 className='text-4xl pb-5 text-center font-bold pt-2 sm:pt-0'>
            {t("abt")}
            <span className='text-yellow-500'>{t("us")}</span>
          </h1>
          <ReactMarkdown escapeHtml={false} remarkPlugins={[gfm]} source={about.description} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
