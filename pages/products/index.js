import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import { getProducts } from "$/utils/api/product";
import { getFullUrl } from "$/utils/image";
import truncate from "truncate-html";

export async function getStaticProps(context) {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 3600 * 1 * 24,
  };
}

const Products = ({ products }) => {

  const getDescription = (description) => {
    const desc = truncate(description, {
      length: 100,
      decodeEntities: true,
      stripTags: true,
      reserveLastWord: true,
    });

    return desc;
  };

  console.log("===> ", products);
  const array3 = [...products, ...products, ...products];
  
  return (
    <div class="min-h-screen flex items-center bg-bproduct pt-10">
    <div class="flex-1 max-w-6xl mx-auto p-10">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
        {array3.map((product, index) => (
            <Link href= {`${product.link}`} key={index}>
                 <a>
                <div className="bg-white shadow h-auto text-center pt-4">
             <div className="relative h-56">
            <AgilityImage
              src={product.image}
              className="rounded-t-lg inline-block"
              layout="fill"
            />
            </div>
            <div className="bg-gray-100 p-2 text-left">
                        <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                          {product.name}
                        </div>
                        <div className="border-b-2 border-primary-500 w-8"></div>
                        <div className="mt-4 text-gray-600 italic font-boldtext-xs">
                                ${product.price || ''}
                                </div>
                      </div>
          </div>
          </a>
            </Link>
        ))}
        </div>
    </div>
  </div>
  );
};

export default Products;
