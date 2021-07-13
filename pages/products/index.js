import { getProducts } from "$/utils/api/product";
import { AgilityImage } from "@agility/nextjs";
import React from "react";
import Link from "next/link";

export async function getStaticProps({ locale }) {
  const products = await getProducts({ locale });
  if (!products || products.length === 0)
    return {
      notFound: true,
    };
  return {
    props: { products },
    revalidate: 3600 * 1 * 24,
  };
}

const Products = ({ products }) => {
  products = [...products, ...products];
  
  return (
    <div>
      <div className="min-h-screen flex max-w-6xl mx-auto mt-28 ">
        
        {/* ui web */}
        <div className="flex-1 p-10 w-full hidden md:block ">
          {products.map((product, key) =>
            key % 2 === 0 ? (
              <div className="grid grid-cols-2 gap-4" key={key}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className="">
                      <div className="py-4 text-center">
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
                <div className="">
                  <div className="py-20">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                    ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                    {product.salePrice > 0 ? <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                      ${product.price}
                    </span> : ""}
                  </h3>
                    {product.variation ? (
                      product.variation.map((v,key) => (
                        <div key={key}>
                          <ui className="list-disc">
                          <li>
                              <a className="font-bold text-sm tracking-tight leading-5">
                                {v.name} : <a className="font-normal text-base font-sspro">{v.value}</a>
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="">
                  <div className="py-20 md:ml-24 lg:ml-32 xl:ml-32">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                    ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                    {product.salePrice > 0 ? <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                      ${product.price}
                    </span> : ""}
                  </h3>
                    {product.variation ? (
                      product.variation.map((v, key) => (
                        <div key={key}>
                          <ui className="list-disc">
                            <li>
                              <a className="font-bold text-sm tracking-tight leading-5">
                                {v.name} : <a className="font-normal text-base font-sspro">{v.value}</a>
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
                <div className="">
                  <Link href={`/products/${product.id}`}>
                    <a>
                      <div className="text-center">
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
        <div className="flex-1 p-10 block md:hidden">
          {products.map((product, key) => (
            <div className="grid grid-cols-1 gap-4" key={key}>
              <div className="">
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className="py-4 text-center">
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
                  <h3 className="text-2xl font-sspro font-bold text-black leading-6 py-4 ">
                    ${product.salePrice > 0 ? product.salePrice : product.price}{" "}
                    {product.salePrice > 0 ? <span className="text-gray-500 line-through text-xs ml-0 pb-4">
                      ${product.price}
                    </span> : ""}
                  </h3>
                  {product.variation ? (
                      product.variation.map((v, key) => (
                        <div key={key}>
                         <ui className="list-outside  text-left">
                            <li>
                              <a className="text-left font-bold text-sm tracking-tight leading-5">
                                {v.name} : <span className="font-normal">{v.value}</span>
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
  );
};

export default Products;
