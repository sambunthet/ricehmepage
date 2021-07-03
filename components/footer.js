import { AgilityImage } from "@agility/nextjs";

const Footer = () => {
  return (
    <div className="bg-primary grid gap-2 grid-cols-1 md:grid-cols-3 md:grid-cols-5 pt-10 pb-10 text-white">
      <div className="pl-6 text-center">
        <div>
          <AgilityImage
            src="http://rice.com.kh/imgs/2/logo_03.png"
            className="inline-block pb-5"
            width={80}
            height={80}
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
      
      <div className="text-center md:text-left sm:text-center">
        <h1 className="font-bold">ACOUNT</h1>
        <h3 className="text-sm">Overview</h3>
        <h3 className="text-sm">Order History</h3>
        <h3 className="text-sm">Manage</h3>
      </div>
      <div className="text-center md:text-left sm:text-center">
        <h1 className="font-bold">ABOUT</h1>
        <h3 className="text-sm">Our Story</h3>
        <h3 className="text-sm">Gallery</h3>
        <h3 className="text-sm">Press</h3>
      </div>
      <div className="text-center md:text-left sm:text-center">
        <h1 className="font-bold">SUPPORT</h1>
        <h3 className="text-sm">Help / FAQ</h3>
        <h3 className="text-sm">Contact Us</h3>
      </div>

      <div className="pl-0 pr-5 text-center sm:text-none md:text-left">
        <h5 className="text-4xl">Sign Up</h5>
        <h1 className="pt-5 pb-5 text-sm">
          Subscribe to receive updates on new arrivals, special offers and other
          discounts
        </h1>
        <input
          type="text"
          placeholder="Your Email"
          className="focus:outline-none focus:ring focus:border-blue-300 rounded-full py-3 px-6"
        />
        <div className="grid grid-cols-2 pt-5">
          <h1 className="text-sm">Privacy Policy</h1>
          <h1 className="text-sm">Terms and Conditions</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
