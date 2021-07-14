
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs";
import {getDistributors} from"$/utils/api/distributor";
import useTranslation from 'next-translate/useTranslation';


export async function getStaticProps({locale}) {
  const distributors = await  getDistributors({locale});
  if (distributors.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {distributors},
    revalidate: 3600 * 1 * 24, // a day in second
  }
}

const Distributors = ({distributors}) => {
  const { t } = useTranslation('common');
    return (
        <div className="relative px-8 pt-24 pb-4">
          <div className="max-w-screen-xl mx-auto">
           
            <div className="max-w-2xl mx-auto mt-4">
              <div className="uppercase text-primary-500 text-md font-bold tracking-widest pt-8 leading-loose">
              {t("distributor")}
              </div>
              <div className="border-b-2 border-primary-500 w-8"></div>

                <div className="max-w-screen-xl mx-auto">
                    <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {distributors.map((distributor, index) => (
                        <Link href= {distributor.website} key={index}>
                        <a target="_blank">
                            <div className="flex-col group mb-8 md:mb-0 p-8">
                                <div className="relative h-48">
                                    <AgilityImage
                                    src={distributor.logo.url}
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
