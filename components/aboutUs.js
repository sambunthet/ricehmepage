import { AgilityImage } from "@agility/nextjs";
import useTranslation from 'next-translate/useTranslation';


const About = (about) => {
  const description = about.description || "";
 
  if(!description)
      return <div></div>;
  var image =  about.image.url;
  const { t } = useTranslation('common');
  return (
    <div className="m-8 gap-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 justify-items-center text-center">
      {/* <Link href={`/products/${product.id}`}> */}
      <a>
        <div className="">
          <div className="sm:py-4 text-center">
            <AgilityImage
              width={640}
              height={640}
              className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
              src={image}
            />
          </div>
        </div>
      </a>
      {/* </Link> */}
      <div>
        <div className="sm:py-20">
          <h1 className="text-4xl pb-5 text-center font-bold pt-2 sm:pt-0">
            {t("abt")}<span className="text-yellow-500">{t("us")}</span>
          </h1>
          <p className="font-sspro text-center text-base md:text-sm lg:text-2xl md:text-left tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="m-5 sm:mt-20 sm:m-20 md:m-32 pt-5 sm:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
        <div className="pt-5">
          <AgilityImage
            width={640}
            height={640}
            className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
            src={image}
          />
        </div>
        <div>
        <h1 className="text-4xl pb-5 text-center font-bold pt-5 sm:pt-0">
        {t("abt")}<span className="text-yellow-500">{t("us")}</span>
        </h1>
          <p className="font-sspro text-center text-sm md:text-sm lg:text-2xl md:text-left p-5 tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;