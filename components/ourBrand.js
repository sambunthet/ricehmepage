const url = process.env.PUBLIC_REST_API_ENDPOINT;
const OurBrand = (brands) => {
    if (!brands)
        return <div></div>;
    return (
        <div>
            <div className="flex flex-col my-16" data-controller="slider">
                <div className="text-black text-4xl text-center pb-10 font-bold">Our <span className="text-yellow-500">Brand</span></div>
                <div className="flex place-content-center text-center scrollbar-hide overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery " data-slider-target="scrollContainer">
                    {Object.values(brands).map((brand) => (
                        <div className="w-60 h-60 px-4 flex-shrink-0 gallery-item" data-slider-target="image" id="5">
                            <img className="inline-block" src={`${url}${brand.image.url}`} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default OurBrand;