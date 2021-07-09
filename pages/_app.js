import '$/styles/globals.css';
import '$/styles/nav.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from "aos";
import "aos/dist/aos.css";
import  Layout from '$/components/layout';
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [show, hanldeShow] = useState(false);
  
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    });

    // window.addEventListener("scroll", () => {
    //   hanldeShow(window.screenY > 100);
    //   console.log("layout scroll ", window.screenY);
    // });

    // return () => {
    //   window.removeEventListener("scroll", null);
    // };
}, []);
console.log(show);


return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
