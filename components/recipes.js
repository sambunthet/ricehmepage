import Link from "next/link";
import truncate from "truncate-html";
import { AgilityImage } from "@agility/nextjs";
import useTranslation from "next-translate/useTranslation";


const Recipes = (props) => {
    if (!props.recipes || props.recipes.length === 0)
        return <div></div>;
    const {recipes} = props;

    const getDescription = (description, length) => {
        const desc = truncate(description, {
            length: length,
            decodeEntities: true,
            stripTags: true,
            reserveLastWord: true,
          });

    return desc;
  };

  const { t } = useTranslation('common');

  return (
    <div>
      <div>
        <div className="text-black text-4xl text-center pb-5 font-bold">
          <Link href={"/recipe"}>
            <a>{t("recipes")}</a>
          </Link>
        </div>
        <div
          className="flex flex-col sm:flex-row place-content-center text-center scrollbar-hide overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery"
          data-slider-target="scrollContainer"
        >
          {recipes.map((recipe, index) => (
            <Link href={`${recipe.link}`} key={index}>
              <a>
                <div className=" rounded-lg w-auto sm:w-72 p-4 m-5">
                  {" "}
                  <div className="relative h-48">
                    <AgilityImage
                      src={recipe.image}
                      className="rounded-lg inline-block"
                      layout="fill"
                    />
                  </div>
                  <div className="bg-gray-10 py-8">
                    <div className="text-primary-500 font-bold  text-xl capitalize">
                      {getDescription(recipe.title, 50)}
                    </div>
                    <div className="mt-4  text-gray-600 italic font-semibold text-xs">
                      <div className="max-w-full">
                        <p className="text-base font-medium font-sspro tracking-wide text-grey-600 mt-1">
                          {getDescription(recipe.description, 100)}
                        </p>
                      </div>
                    </div>
                      <p className="text-center sm:text-left text-yellow-500">
                          {t("readMore")} <span className="">&#8594;</span>
                      </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Recipes;


