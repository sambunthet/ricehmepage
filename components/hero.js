import React from "react";
import useTranslation from 'next-translate/useTranslation';

const Header = () => {
  const { t } = useTranslation('common');
  return (
    <>
    <div class="relative flex items-center justify-center h-screen overflow-hidden" style={{zIndex: 0}}>
      <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        Welcome to my site!
      </div>
      <video autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />Your browser does not support the video tag.
      </video>
    </div>
      <div
        className="hidden md:block h-screen"
        style={{
          backgroundImage:
            "url(https://www.killingthyme.net/wp-content/uploads/2015/10/homemade-ramen-bowls-5.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-5/6 lg:w-2/5 mt-40 ml-10 mb-10 sm:ml-24 rounded-xl bg-white shadow-lgtext-gray-800 flex items-center justify-center px-5 py-5 font-body ">
          <p className="text-gray-600 text-center px-5 xl:p-10 text-sm sm:text-xl md:text-2xl ">
          &quot; {t("company")} &quot;
          </p>
        </div>
      </div>

      <div
        className="block md:hidden"
        style={{
          backgroundImage:
            "url(https://www.killingthyme.net/wp-content/uploads/2015/10/homemade-ramen-bowls-5.jpg)",
          width: "100%",
          height: "455px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-5/6 lg:w-2/5 mt-40 ml-10 mb-10 sm:ml-24 rounded-xl bg-white shadow-lgtext-gray-800 flex items-center justify-center px-5 py-5 font-body ">
          <p className="text-gray-600 text-center px-5 xl:p-10 text-sm sm:text-xl md:text-2xl ">
          &quot; {t("company")} &quot;
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
