import Link from "next/link";
import truncate from "truncate-html";
import { AgilityImage } from "@agility/nextjs";


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
    }  

    return(
        <div>
            <div>
            <div className="text-black text-4xl text-center pb-5 font-bold"><Link href={"/recipe"}><a>Recipes</a></Link></div>
                <div className="flex flex-col sm:flex-row place-content-center text-center scrollbar-hide overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery" data-slider-target="scrollContainer">
                {recipes.map((recipe, index)=>
                    <Link href={`${recipe.link}`} key={index}>
                        <a>
                            <div className=" rounded-lg w-auto sm:w-72 p-4 m-5">                                <div className="relative h-48">
                                    <AgilityImage
                                        src={recipe.image}
                                        className="rounded-lg inline-block"
                                        layout="fill"
                                    />
                                </div>
                                <div className="bg-gray-10 py-8">
                                <div className="uppercase text-primary-500 text-xs font-bold ">
                                {getDescription(recipe.title, 50)}
                                </div>
                                <div className="mt-4  text-gray-600 italic font-semibold text-xs">
                                <div classNme="max-w-full">
                                <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                                {getDescription(recipe.description, 100)}
                                </p>
                              </div>
                                </div>
                            </div>
                            </div>
                        </a>
                    </Link>
                )}
                </div>
                </div>
        </div>
    );


    return (
        <div className="sm:m-20 md:m-32">
            <div className="text-black text-4xl  text-center pb-5 font-bold">Recipes</div>
            <div className="flex flex-col place-content-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap:1 place-items-center text-center">
                {k.map((recipe, index)=>
                    <Link href={`${recipe.link}`} key={index}>
                        <a>
                            <div className="border-2 rounded-lg">
                                <img className="h-48 mt-4 w-48 sm:h-50 md:w-50 md:h-60 md:w-60 object-cover inline-block " src={recipe.image} />
                                <div className="bg-gray-10 p-4 ">
                                <div className="uppercase text-primary-500 text-xs font-bold ">
                                {getDescription(recipe.title, 50)}
                                </div>
                                <div className="mt-4  text-gray-600 italic font-semibold text-xs">
                                {getDescription(recipe.description, 100)}
                                </div>
                            </div>
                            </div>
                        </a>
                    </Link>
                )}
            </div>
            </div>
            </div>
     
    );
}

export default Recipes;


