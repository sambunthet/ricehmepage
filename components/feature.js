import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import useTranslation from "next-translate/useTranslation";

const FeaturesBox = (props) => {
  const { t } = useTranslation("common");
  // const readMore = t("readMore");

  return (
    <div>
      <div className="min-h-screen flex max-w-6xl mx-auto mt-0">
        {/* ui web */}
        <div className="flex-1 pl-10 pr-10 pb-8 w-full hidden md:block ">
          {props.features.map((product, key) =>
            key % 2 === 0 ? (
              <div key={key} className="grid grid-cols-2 gap-4">
                <Link href={`/products/${product.id}`}>
                  <a data-aos="fade-right">
                    <div className="">
                      <div className="py-4 mt-6 text-center">
                        <AgilityImage
                          width={320}
                          height={320}
                          className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  </a>
                </Link>
                <div data-aos="fade-left">
                  <div className="py-20">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    {
                      product.price ? <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                      ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                      {product.salePrice > 0 ? <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                        ${product.price}
                      </span> : ""}
                    </h3> : <div className="pb-4"></div>
                    }
                    {product.variation ? (
                      product.variation.map((v ,k) => (
                        <div key={k} className="">
                          <ui className="list-disc">
                            <li>
                              <a className="font-medium text-sm tracking-tight leading-5">
                                {v.name} : <a className="text-base font-sspro">{v.value.trim()}</a>
                              </a>
                            </li>
                          </ui>
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div key={key} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div data-aos="fade-right">
                  <div className="py-20 md:ml-24 lg:ml-32 xl:ml-32">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    {
                      product.price ? <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                      ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                      {product.salePrice > 0 ? <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                        ${product.price}
                      </span> : ""}
                    </h3> : <div className="pb-4"></div>
                    }
                    {product.variation ? (
                      product.variation.map((v, k) => (
                        <div key={k} className="">
                          <ui className="list-disc">
                            <li>
                              <a className="font-medium text-sm tracking-tight leading-5">
                                {v.name} : <a className="text-base font-sspro">{v.value.trim()}</a>
                              </a>
                            </li>
                          </ui>
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <div data-aos="fade-left">
                  <Link href={`/products/${product.id}`}>
                    <a>
                      <div className="text-center mt-8">
                        <AgilityImage
                          width={320}
                          height={320}
                          className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* ui mobile */}
        <div className="flex-1 pl-10 pr-10 pb-8 block md:hidden">
          {props.features.map((product, key) => (
            <div key={key} className="grid grid-cols-1 gap-4">
              <div className="">
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className="pb-2 pt-6 text-center">
                      <AgilityImage
                        width={320}
                        height={320}
                        className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="">
                <div className="py-1 text-center">
                  <h2 className="text-2xl font-bold text-black tracking-normal">
                    {product.name}
                  </h2>
                  {
                      product.price ? <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                      ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                      {product.salePrice > 0 ? <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                        ${product.price}
                      </span> : ""}
                    </h3> : <div className="pb-4"></div>
                    }
                  {product.variation ? (
                    product.variation.map((v, k) => (
                      <div key={k} className="">
                        <ui className="list-disc text-left">
                            <li>
                              <a className="text-left font-bold text-sm tracking-tight leading-5">
                                {v.name} : <a className="text-base font-sspro">{v.value.trim()}</a>
                              </a>
                            </li>
                          </ui>
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

const Feature = (props) => {
  const { t } = useTranslation("common");
  const headLineText = props.home.HeadlineText;
  if (!props.features || props.features.length === 0) return <div></div>;
  const features = props.features;
  return (
    <div className="bg-white pt-0 font-body">
      <div className="mt-6 md:m-12 ">
        <div>
          <h1 className="text-4xl text-center font-bold">
            {t("rice")}<span className="text-yellow-500">Vermicelli</span>
          </h1>
        </div>
        <div className="justify-items-center text-center">
          <div className="grid grid-cols-1">
            <p className=" text-base font-medium  tracking-wide text-black p-5  col-start-2 col-span-4">
              {headLineText}
            </p>
          </div>
        </div>
      </div>
      <FeaturesBox features={features} />
    </div>
  );
};

export default Feature;
