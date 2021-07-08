import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import { getProducts} from '$/utils/api/product';
import { getFullUrl } from "$/utils/image";


export async function getStaticProps(context) {

    const products = await  getProducts();
 
    return {
      props: {products},
      revalidate: 3600 * 1 * 24, // a day in second
    }
  }

const Products = ({products}) => {
    return (

        <div className="relative w-full h-full bg-bproduct p-20">
                    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-14">
                        {products.map((product) => (
                            <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src={product.image}
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Name :  {product.name}</h1>
                             <h1>Price :  {product.price}</h1>
                             {/* <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1> */}
                             <h1 >description : {product.description}</h1>
                            </div>
                        </div>
                        ))}
                        

                        {/* <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src="http://rice.com.kh/products/65/151x124_Lai_fen_400g.jpg"
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1>
                            </div>
                        </div>


                        <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src="http://rice.com.kh/products/64/151x124_Dong_Quan_copy.jpg"
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1>
                            </div>
                        </div>


                        <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src="http://rice.com.kh/products/63/151x124_LF_Rice___U.jpg"
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src="http://rice.com.kh/products/67/151x124_Zhao_Qing.jpg"
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src="http://rice.com.kh/products/62/151x124_Jiang_Xi_.jpg"
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1>
                            </div>
                        </div>


                        <div className="bg-white shadow-lg h-auto w-72 text-center pt-4">
                                <AgilityImage
                                    src="http://rice.com.kh/products/55/202x123_Gui_lin.jpg"
                                    className="rounded-t-lg inline-block"
                                    width="227"
                                    height="227"
                                />
                            <div className="p-4 text-left">
                             <h1>Size :  0.8mm</h1>
                             <h1>Packing : 40pack X 400g</h1>
                             <h1 >Direction for Use : Soak in Boiling Water 8-10 Minute</h1>
                             <h1 >Conservation directions : Store in Dry Place</h1>
                             <h1 >Shelf life (in months) :  36 months</h1> 
                             <h1 >Brand of Produce : CamRice</h1>
                            </div>
                        </div> */}



                    </div>
                </div>
          





    );
}

export default Products;