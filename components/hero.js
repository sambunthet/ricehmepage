import React from "react";
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
      <div className="align-items-center pt-5 pb-4">
      <div className="p-5">
            <p className="text-uppercase text-yellow-500 font-bold text-3xl mb-4">
              Welcome to
            </p>
            <h1 className="mb-4 text-indigo-800 font-bold text-3xl">
              INDOCHINA RICE MILL LIMITED{" "}
              <span className="text-4xl font-bold text-blue-500">Cambodia</span>
            </h1>
            <p className="text-white mb-4 pb-2 hidden md:block">
              Indochina Rice Mill has gained the confidence and trust of our
              valuable worldwide customers in our top quality rice and rice
              vermicelli products. Armed with a serious management team and our
              stringent quality control, we are here to consistently provide the
              most competitive price and the best quality rice and rice
              vermicelli to our customers, and are ready to be your trustworthy
              partner.
            </p>
            
            <p className="text-white mb-4 pb-2 block md:hidden">
              Indochina Rice Mill has gained the confidence and trust of our
              valuable worldwide customers in our top quality rice and rice
              vermicelli products. Armed with a serious management team and our
              stringent quality control,...
            </p>
        
            <a className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="#">Find Out How <span className="ml-2 right-icon">&#8594;</span></a>
          </div>
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
              Indochina Rice Mill has gained the confidence and trust of our
              valuable worldwide customers in our top quality rice and rice
              vermicelli products. Armed with a serious management team and our
              stringent quality control, we are here to consistently provide the
              most competitive price and the best quality rice and rice
              vermicelli to our customers, and are ready to be your trustworthy
              partner.
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
