const OurBrand = () => {
    return (
        <div>
           <div className="aspect-w-16 aspect-h-9 md:p-80 sm:p-70 lg:p-90 md:ml-44 sm:ml-44 lg:ml-44  md:mr-44 sm:mr-44 lg:44">
  <iframe src="https://www.youtube.com/embed/2e3RwqOKsmI" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
            <div className="flex flex-col my-24" data-controller="slider">
                <div className="text-black text-4xl text-left pb-10 pl-20 font-bold">Our <span className="text-yellow-500">Brand</span></div>
                <div className="flex place-content-center text-center overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery " data-slider-target="scrollContainer">
                    <div className="w-60 h-60 px-4 flex-shrink-0 gallery-item " data-slider-target="image" id="1">
                        <img className="inline-block" src="http://rice.com.kh/imgs/348/logo_03.png" />
                    </div>
                    <div className="w-60 h-60  px-4 flex-shrink-0 gallery-item" data-slider-target="image" id="2">
                        <img className="inline-block" src="http://rice.com.kh/imgs/330/ICV.png" />
                    </div>
                    <div className="w-60 h-60 px-4 flex-shrink-0 gallery-item" data-slider-target="image" id="4">
                        <img className="inline-block" src="http://rice.com.kh/imgs/316/Untitled-10-03.png" />
                    </div>
                    <div className="w-60 h-60 px-4 flex-shrink-0 gallery-item" data-slider-target="image" id="5">
                        <img className="inline-block" src="http://rice.com.kh/imgs/303/Camrice.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurBrand;