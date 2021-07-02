import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary grid gap-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 pt-10 pb-10 text-white">
      <div className="text-center">
        <div>
          <img
            src="http://rice.com.kh/imgs/2/logo_03.png"
            className="inline-block pb-5"
          />
        </div>
        <div className="pl-2 pr-2">
          Indochina Rice Mill has gained the confidence and trust of our
          valuable worldwide customers in our top quality rice and rice
          vermicelli products.
        </div>
        <div className="grid grid-cols-3 pt-5">
          <div>
            <i className="fab fa-facebook-square fa-3x"></i>
          </div>
          <div>
            <i className="fab fa-instagram fa-3x"></i>
          </div>
          <div>
            <i className="fab fa-google fa-3x"></i>
          </div>
        </div>
      </div>
      <div className="text-center md:text-left sm:text-left">
        <h1>ACOUNT</h1>
        <h3>Overview</h3>
        <h3>Order History</h3>
        <h3>Manage</h3>
      </div>
      <div className="text-center md:text-left sm:text-left">
        <h1>ABOUT</h1>
        <h3>Our Story</h3>
        <h3>Gallery</h3>
        <h3>Press</h3>
      </div>
      <div className="text-center md:text-left sm:text-left">
        <h1>SUPPORT</h1>
        <h3>Help / FAQ</h3>
        <h3>Contact Us</h3>
      </div>

      <div className="pl-5 pr-5">
        <h5 className="text-4xl">Sign Up</h5>
        <h1 className="pt-5 pb-5">
          Subscribe to receive updates on new arrivals, special offers and other
          discounts
        </h1>
        <input
          type="text"
          placeholder="Your Email"
          className="focus:outline-none focus:ring focus:border-blue-300 rounded-full py-3 px-6"
        />
        <div className="grid grid-cols-2 pt-5">
          <div>Privacy Policy</div>
          <div>Terms /and Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
