import React from "react";
import { getProduct } from "$/utils/api/product";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import Image from 'next/image'

export const getStaticPaths = async (context) => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params, locale }) {
  const id = params.id;
  const product = await getProduct(id, locale);
  if (!product) return { notFound: true };
  return {
    props: { product },
    revalidate: 3600 * 1 * 24,
  };
}

const ProductDetail = ({ product }) => {
  if (!product) return <div></div>;

  return (
    <div>
      <div className="min-h-screen flex mt-28 bg-white">
        <div className="flex-1 max-w-6xl mx-auto p-10">
          {/* image */}
          <div className="py-4 text-center">
            <div className="relative inline-block p-4">
              <Image src={product.image} alt={product.name} width="600" height="600" />
            </div>
          </div>

          {/* detail */}

          <ul className="grid grid-cols-1 gap-0 sm:gap-14 sm:grid-cols-2 sm:px-20">
            <li className="">
              <div>
                <h2 className="text-4xl text-center sm:text-right  font-bold text-black tracking-normal">
                  {product.name}
                </h2>
                <div className="text-2xl text-center sm:text-right font-bold text-black leading-4 py-4">
                  ${product.price}
                </div>
              </div>
            </li>
            <li className="">
              {product.variation ? (
                product.variation.map((v, k) => (
                  <div key={k} className="ml-5">
                    <ui className="list-disc">
                      <li>
                      <h4 className="font-bold">{v.name} : <a className="font-normal font-sspro text-lg">{v.value}</a></h4>  
                      </li>
                    </ui>
                  </div>
                ))
              ) : null
              }
            </li>
          </ul>

          {/* des */}

          <div className="mt-5 sm:px-20">
            {product.description ? (
              <div>
                <div className="py-4 font-sspro text-lg">
                  <ReactMarkdown
                    remarkPlugins={[gfm]}
                    children={product.description}
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
