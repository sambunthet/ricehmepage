import React from "react";
import { getProduct } from "$/utils/api/product";
import ReactMarkdown from "react-markdown"
const gfm = require('remark-gfm')

export const getStaticPaths = async (context) => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({params, locale}) {
    const id = params.id;
    const product = await getProduct(id, locale);
    if(!product)
        return {notFound: true};
    return {
        props: { product },
        revalidate: 3600 * 1 * 24,
    }
}


const ProductDetail = ({ product }) => {
    if (!product)
        return <div></div>;

    return (
        <div>
            <div className="min-h-screen flex mt-28 bg-white">
                <div className="flex-1 max-w-6xl mx-auto p-10">

                    {/* image */}
                    <div className="py-4 text-center">
                        <div className="relative inline-block p-4">
                            <img
                                src={product.image}
                                width="600"
                                height="600"
                            />
                        </div>
                    </div>

                    {/* detail */}

                    <ul className="grid grid-cols-1 gap-14 sm:grid-cols-2">
                        <li className="">
                            <div>
                                <h2 className="text-4xl font-bold text-black tracking-normal">{product.name}</h2>

                                {
                                    product.variation ?
                                        product.variation.map((v) => (
                                            <div className="ml-5">
                                                <ui className="list-disc">
                                                    <li>
                                                        <h4 className="font-bold">{v.name} :   <span className="font-normal">{v.value}</span></h4>
                                                    </li>
                                                </ui>
                                            </div>
                                        )) : <div></div>
                                }
                                
                            </div>
                        </li>
                        <li className="">
                            <div className="text-4xl font-bold text-black leading-4 py-4">${product.price}</div>
                        </li>
                    </ul>

                    {/* des */}

                    <div className="mt-5">
                        {
                            product.description
                                ? <div>
                                    <h2 className="text-2xl font-bold text-black tracking-normal">Description</h2>
                                    <div className="ml-5 py-4"> <ReactMarkdown remarkPlugins={[gfm]} children={product.description} /></div>
                                </div>
                                : <div></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductDetail;