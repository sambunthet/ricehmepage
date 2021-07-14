import React from "react";
import useTranslation from 'next-translate/useTranslation';

const Header = ({home}) => {
  const headLineText = home.HeadlineText;
  const video = home.HeadlineMedia.url;
  const { t } = useTranslation('common');

  console.log("====>>> ", t);
  return (
    <>
      <div className="relative h-455 md:h-screen flex items-start justify-left overflow-hidden z-0">
        <video autoPlay loop muted className="absolute z-10 object-cover w-full h-full " poster={"/assets/image/homemade-ramen-bowls-5.jpg"}>
          <source src={video} type="video/mp4" />Your browser does not support the video tag.
        </video>
        <div className="relative z-10 min-w-full min-h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className="relative w-5/6 mt-40 lg:w-2/5 ml-10 mb-10 sm:ml-24 rounded-xl bg-white shadow-lgtext-gray-800 flex items-center justify-center px-5 py-5 font-body">
              <p className="text-lg font-medium tracking-wide text-black text-center px-4 xl:p-4">
                  &quot; {headLineText} &quot;
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
