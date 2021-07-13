import useTranslation from 'next-translate/useTranslation';

const OurBrand = (brands) => {
    if (!brands)
        return <div></div>;
    
    const { t } = useTranslation('common');
    
    return (
        <div>
            <div className="flex flex-col my-16" data-controller="slider">
                <div className="text-black text-4xl text-center pb-10 font-bold">{t("obrand")}<span className="text-yellow-500">{t("bbrand")}</span></div>
                <div className="flex place-content-center text-center scrollbar-hide overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery " data-slider-target="scrollContainer">
                    {Object.values(brands).map((brand, key) => (
                        <div key={key} className="w-60 h-60 px-4 flex-shrink-0 gallery-item" data-slider-target="image" id="5">
                            <img className="inline-block" src={`${brand.image.url}`} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default OurBrand;