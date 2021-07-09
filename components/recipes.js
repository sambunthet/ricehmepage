

import Link from "next/link";

const Recipes = (props) => {
    if (!props.recipes || props.recipes.length === 0)
        return <div></div>;
    const {recipes} = props;
    return (
        <div className="sm:m-20 md:m-32">
            <div className="text-black text-4xl  text-center pb-5 font-bold">Recipes</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap:1 justify-items-center text-center">
                {recipes.map((recipe, index)=>
                    <Link href={`${recipe.link}`} key={index}>
                        <a>
                            <div>
                                <img className="h-48 w-48 sm:h-50 md:w-50 md:h-60 md:w-60 object-cover inline-block " src={recipe.image} />
                                <p className="pt-5">{recipe.title}</p>
                            </div>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Recipes;


