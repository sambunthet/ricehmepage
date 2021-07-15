import '$/styles/globals.css';
import '$/styles/nav.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from "aos";
import "aos/dist/aos.css";
import  Layout from '$/components/layout';
import React, { useState, useEffect } from "react";
import { getHome } from '$/utils/api/homepage';

export async function getServerSideProps({locale}) {
  const [home] = await Promise.all([getHome(locale)]);
  return {
    props: {
      home
    },
  }
}

function MyApp({ Component, pageProps}) {
  const [show, hanldeShow] = useState(false);
  let home = {};
  useEffect(async (locale) => {
    home = await Promise.all([getHome("en")]);
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

  // console.log("home __app", home);


return (

    <div>{
      home ? <Layout home={home}>
        <Component {...pageProps} />
      </Layout> : <div>d</div>
    }</div>


  )
}

export default MyApp
