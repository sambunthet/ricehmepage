import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import  Layout from '../components/layout';


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
  // AOS.init({
  //   easing: "ease-out-cubic",
  //   once: true,
  //   offset: 50,
  // });
  AOS.init({
    delay: 200,
    duration: 1200,
    once: false,
  });
}, []);

return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
