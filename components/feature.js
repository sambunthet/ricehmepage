import React from "react";
import { AgilityImage } from "@agility/nextjs";

const FeaturesBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <div>
            <div className="m-6 md:mt-1 sm:m-10 md:m-12 hidden md:block">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div data-aos="fade-right" className="pl-32 ml-32">
                  <AgilityImage
                    width={320}
                    height={320}
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                  />
                </div>
                <div className="mt-5 mt-sm-0 mb-4" data-aos="fade-left">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-left text-2xl font-bold pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-left text-xl font-bold mb-3 ">
                    $5.94{" "}
                    <span className="text-gray-500 line-through text-xs">
                      $6.99
                    </span>
                  </h5>
                  <p className="text-center sm:text-left mb-3 f-15">
                    {feature.description}
                  </p>
                  <p className="text-center sm:text-left text-yellow-500">
                    Read More <span className="">&#8594;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:m-20 md:m-32 block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div>
                  <AgilityImage
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                    width={320}
                    height={320}
                  />
                </div>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-left text-2xl font-bold pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-left text-xl font-bold mb-3 ">
                    $5.94{" "}
                    <span className="text-gray-500 line-through text-xs">
                      $6.99
                    </span>
                  </h5>
                  <p className="text-center sm:text-left mb-3 f-15">
                    {feature.description}
                  </p>
                  <p className="text-center sm:text-left text-yellow-500">
                    Read More <span className="">&#8594;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="m-6 md:mt-1 sm:m-10 md:m-12 hidden md:block">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div className="mt-5 sm:mt-0 mb-4" data-aos="fade-right">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-right  text-2xl font-bold mb-3 pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-right text-xl font-bold mb-3 ">
                    $5.94{" "}
                    <span className="text-gray-500 line-through text-xs">
                      $6.99
                    </span>
                  </h5>
                  <p className="text-center sm:text-right mb-3 f-15">
                    {feature.description}
                  </p>
                  <p className="text-center sm:text-right text-yellow-500">
                    Read More <span className="">&#8594;</span>
                  </p>
                </div>
                <div data-aos="fade-left" className="pr-32 mr-32">
                  <AgilityImage
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
            <div className="sm:m-20 md:m-32 block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
                <div>
                  <AgilityImage
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={feature.image}
                    alt={feature.name}
                    width={320}
                    height={320}
                  />
                </div>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-center sm:text-left text-2xl font-bold pt-3">
                    {feature.name}
                  </h5>
                  <h5 className="text-center sm:text-left text-xl font-bold mb-3 ">
                    $5.94{" "}
                    <span className="text-gray-500 line-through text-xs">
                      $6.99
                    </span>
                  </h5>
                  <p className="text-center sm:text-left mb-3 f-15">
                    {feature.description}
                  </p>
                  <p className="text-center sm:text-left text-yellow-500">
                    Read More <span className="">&#8594;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

const Feature = (props) => {
  if (!props.features || props.features.length === 0)
        return <div></div>;
  const features = props.features;
  return (
    <div className="bg-white pt-10 font-body">
      <div className="mt-6 md:m-12 ">
        <div>
          <h1 className="text-4xl text-center font-bold">
            Rice <span className="text-yellow-500">Vermicelli</span>
          </h1>
        </div>
        <div className="justify-items-center text-center">
          <div className="grid grid-cols-6">
            <p className="text-center text-sm md:text-sm lg:text-2xl p-5 tracking-wide col-start-2 col-span-4">
              Indochina Rice Mill has gained the confidence and trust of our
              valuable worldwide customers in our top quality rice and rice
              vermicelli products. Armed with a serious management team and our
              stringent quality control, we are here to consistently provide the
              most competitive price and the best quality rice and rice
              vermicelli to our customers, and are ready to be your trustworthy
              partner.
            </p>
          </div>
        </div>
      </div>
      <FeaturesBox features={features} />
    </div>
  );
};
export default Feature;