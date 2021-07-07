const url = global.apiEndPoint;
const OurBrand = (brands) => {
    if (!brands)
        return <div></div>;
    return (
        <div>
            <div className="aspect-w-16 aspect-h-9 md:p-80 sm:p-70 lg:p-90 md:ml-44 sm:ml-44 lg:ml-44  md:mr-44 sm:mr-44 lg:44">
                <iframe src="https://www.youtube.com/embed/2e3RwqOKsmI" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex flex-col my-24" data-controller="slider">
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