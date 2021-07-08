import { AgilityImage } from "@agility/nextjs";
import Image from "next/image";


const url = "https://cms.devcorp.me";
const About = (about) => {
  

  const description = about.description || "";
  var image =  url + about.image.url;
 
  if(!description)
      return <div></div>;
  return (
    <div className="sm:mt-20 sm:m-20 md:m-32 pt-5 sm:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap:2 justify-items-center text-center">
        <div className="pt-5">
          <AgilityImage
            width={640}
            height={640}
            className="h-48 w-48 sm:h-70 md:w-70 md:h-70 md:w-70 lg:h-80 lg:w-80 object-cover inline-block "
            src={image}
          />
        </div>
        <div>
        <h1 className="text-4xl pb-5 text-center font-bold pt-5 sm:pt-0">
          About <span className="text-yellow-500">Us</span>
        </h1>
          <p className="text-center text-sm md:text-sm lg:text-2xl md:text-left p-5  tracking-wide font-semibold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;