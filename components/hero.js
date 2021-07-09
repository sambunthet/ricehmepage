import React from "react";
import { getLocaletext } from "$/utils/localization";
import { Container, Row, Col } from "reactstrap";

const Header = () => {


  return (
    <div
      style={{
        backgroundImage: "url(https://www.killingthyme.net/wp-content/uploads/2015/10/homemade-ramen-bowls-5.jpg)",
        width: "100%",
        height: "755px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        <div className="absolute w-5/6 lg:w-2/5 mt-40 ml-10 mb-10 sm:ml-24 rounded-xl bg-white shadow-lgtext-gray-800 flex items-center justify-center px-5 py-5 font-body ">
        <p className="text-gray-600 text-center px-5 xl:p-10 text-sm sm:text-xl md:text-2xl ">
          " {getLocaletext('company')} "
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="relative">
        <img src="https://wallpaperaccess.com/full/1463517.jpg" />
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl  w-3/4 md:w-2/5 mx-auto -mt-1  rounded-lg rounded-t-non">
          <div className="pr-lg-5">
            <p className="text-uppercase text-warning font-weight-medium f-56 mb-4">
              Welcome to
            </p>
            <h1 className="mb-4 font-weight-medium line-height-1_4">
              INDOCHINA RICE MILL LIMITED{" "}
              <span className="text-primary font-weight-medium">Cambodia</span>
            </h1>
            <p className="text-white mb-4 pb-2">
              " {getLocaletext('company')} "
            </p>
            <a href="#" className="btn btn-warning">
              Find Out How <span className="ml-2 right-icon">&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
