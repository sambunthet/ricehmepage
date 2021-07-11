import React from "react";
import { getProduct } from "$/utils/api/product";


export const getStaticPaths = async (context) => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
  }
  
export async function getStaticProps(context) {
    const id = context.params.id;
    console.log("===> id ", id);
    const product = await  getProduct(id);

    return {
      props: {product},
      revalidate: 3600 * 1 * 24,
    }
  }


const ProductDetail = ({product}) => {

    console.log("===> ", product);

    if(!product)
      return <div></div>;

    return (
        <div>
            <div class="min-h-screen flex mt-32">
                <div class="flex-1 max-w-4xl mx-auto p-10">
                    <ul class="grid grid-cols-2 gap-4">
                        <li class="bg-white rounded-lg shadow-xl">
                        <div className="py-4">
                                    <div className="relative h-56">
                                        <AgilityImage
                                            src={product.image}
                                            className="rounded-t-lg inline-block"
                                            layout="fill"
                                        />
                                    </div>
                                </div>
                        </li>
                        <li class="bg-white rounded-lg shadow-xl">
                            <div class="h-24">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default ProductDetail;