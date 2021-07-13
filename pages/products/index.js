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
  products = [...products,...products,...products];
  return (
    <div>
      <div className="min-h-screen flex mt-28 ">
        {/* ui web */}
        <div className="flex-1 max-w-6xl mx-auto p-10 hidden md:block">
          {products.map((product, key) =>
            key % 2 === 0 ? (
              <ul className="grid grid-cols-2 gap-4">
                <Link href={`/products/${product.id}`}>
                  <a>
                    <li className="">
                      <div className="py-4 text-center">
                    
                        <AgilityImage
                    width={320}
                    height={320}
                    className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
                    src={product.image}
                    alt={product.name}
                  />
                      
                      </div>
                    </li>
                  </a>
                </Link>
                <li className="">
                  <div className="py-20">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    <h3 className="text-2xl font-bold text-black leading-4 py-4">
                      ${product.price}
                    </h3>
                    {product.variation ? (
                      product.variation.map((v) => (
                        <div className="ml-5">
                          <ui className="list-disc">
                            <li>
                              <h4 className="font-bold">
                                {v.name} :{" "}
                                <span className="font-normal">{v.value}</span>
                              </h4>
                            </li>
                          </ui>
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <li className="">
                  <div className="py-20 pl-24">
                    <h2 className="text-4xl font-bold text-black tracking-normal">
                      {product.name}
                    </h2>
                    <h3 className="text-2xl font-bold text-black leading-4 py-4">
                      ${product.price}
                    </h3>
                    {product.variation ? (
                      product.variation.map((v) => (
                        <div className="ml-5">
                          <ui className="list-disc">
                            <li>
                              <h4 className="font-bold">
                                {v.name} :{" "}
                                <span className="font-normal">{v.value}</span>
                              </h4>
                            </li>
                          </ui>
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </li>
                <li className="">
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
                </li>
              </ul>
            )
          )}
        </div>

        {/* ui mobile */}
        <div className="flex-1 max-w-6xl mx-auto p-10 block md:hidden">
          {products.map((product, key) => (
            <ul className="grid grid-cols-1 gap-4">
              <li className="">
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
              </li>
              <li className="">
                <div className="py-2">
                  <h2 className="text-2xl font-bold text-black tracking-normal">
                    {product.name}
                  </h2>
                  <h3 className="text-lg font-bold text-black leading-4 py-4">
                    ${product.price}
                  </h3>
                  {product.variation ? (
                    product.variation.map((v) => (
                      <div className="ml-5">
                        <ui className="list-disc">
                          <li>
                            <h4 className="font-bold text-sm">
                              {v.name} :{" "}
                              <span className="font-normal">{v.value}</span>
                            </h4>
                          </li>
                        </ui>
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Products;
