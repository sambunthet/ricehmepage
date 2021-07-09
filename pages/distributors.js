
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import {getDistributors} from"$/utils/api/distributor";
import {getFullUrl} from"$/utils/image/getFullUrl"


export async function getStaticProps(context) {
  const distributors = await  getDistributors();
  return {
    props: {distributors},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}

const Distributors = ({distributors}) => {
    return (
        <div className="relative px-8 pt-4 pb-4">
          <div className="max-w-screen-xl mx-auto">
           
            <div className="max-w-2xl mx-auto mt-4">
              <div className="uppercase text-primary-500 text-md font-bold tracking-widest leading-loose">
              Where to buy
              </div>
              <div className="border-b-2 border-primary-500 w-8"></div>
              <h1 className="font-display text-2xl font-bold my-6 text-secondary-500">
              Find your nearest place to buy!
              </h1>
                <div className="max-w-screen-xl mx-auto">
                    <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {distributors.map((distributor, index) => (
                        <Link href= {distributor.website} key={index}>
                        <a target="_blank">
                            <div className="flex-col group mb-8 md:mb-0 p-8 border-2  rounded-lg">
                                <div className="relative h-48">
                                    <AgilityImage
                                    src={getFullUrl(distributor.logo.url)}
                                    className="rounded-t-lg"
                                    layout="fill"
                                    />
                                </div>
                                <div className="bg-gray-10 p-4">
                                    <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                                    {distributor.title} 
                                    </div>
                                    <div className="border-b-2 border-primary-500 w-8"></div>
                                    <div className="mt-4  text-gray-600 italic font-semibold text-xs">
                                    {(distributor.description)}
                                    </div>
                                </div>
                            </div>
                        </a>
                        </Link>
                    ))}
                    </div>
            </div>
              
              
            </div>
          </div>
        </div>
      );

}


export default Distributors;