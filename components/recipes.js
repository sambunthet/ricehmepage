

const Recipes = () => {

    return (
        <div className="sm:m-20 md:m-32">
            <div className="text-black text-4xl  text-center pb-5 font-bold">Recipes</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap:1 justify-items-center text-center">
                <div >
                    <img className="h-48 w-48 sm:h-50 md:w-50 md:h-60 md:w-60 object-cover inline-block " src="https://cdn.shopify.com/s/files/1/0506/3252/3965/articles/a-sha-shrimp-garlic-noodles_667x.jpg?v=1617709872" />
                    <p className="pt-5">Fresh Rames After Cooing </p>
                </div>
                <div>
                    <img className="h-48 w-48 sm:h-50 md:w-50 md:h-60 md:w-60  object-cover inline-block " src="https://cdn.shopify.com/s/files/1/0506/3252/3965/articles/a-sha-shrimp-garlic-noodles_667x.jpg?v=1617709872" />
                    <p className="pt-5">Stri fry Noodles with Sweet Peppers tofu and Watermelon Radish</p>
                </div>
                <div>
                    <img className="h-48 w-48 sm:h-50 md:w-50 md:h-60 md:w-60  object-cover inline-block " src="https://cdn.shopify.com/s/files/1/0506/3252/3965/articles/a-sha-shrimp-garlic-noodles_667x.jpg?v=1617709872" />
                    <p className="pt-5 pb-5">Ramen soup with Spring onion</p>
                </div>
            </div>


        </div>
    );
}

export default Recipes;


