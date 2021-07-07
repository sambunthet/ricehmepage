import { AgilityImage } from "@agility/nextjs";
import Image from "next/image";




const About = () => {
  return (
    <div className="sm:m-20 md:m-32 pt-5 sm:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
        <div className="pt-5">
          <AgilityImage
            width={320}
            height={320}
            className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
            src="https://cdn.shopify.com/s/files/1/0506/3252/3965/articles/a-sha-shrimp-garlic-noodles_667x.jpg?v=1617709872"
          />
        </div>
        <div>
        <h1 className="text-4xl pb-5 text-center font-bold">
          About <span className="text-yellow-500">Us</span>
        </h1>
          <p className="text-center p-5">
            Indochina Rice Mill has the capacity to produce large quantities of
            quality rice and rice vermicelli to our valuable customers all
            around the world. Indochina Rice Mill is strategically located in
            Kompong Chhnang Province on National Road No. 5 along the way to
            Pursat province and Battambang province where the best fragrant
            jasmine rice is grown. The place is nature’s gift for farming being
            rich in fertile soil, which produces excellent quality rice for our
            customers. We carefully select the best quality paddy for our
            premium quality milled rice. We are a reliable source with the
            ability to supply our customers with a consistent product. Our
            factory’s warehouse is able to store up to 30,000 metric tons using
            modern machinery. Honest and consistent, our company is growing
            continuously and steadily; we endeavor to become your long term
            business partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
