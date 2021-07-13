import Head from "next/head";
import Nav from "$/components/nav";
import FooterRice from '$/components/footer-rice';
import React, { useState, useEffect } from "react";


const Layout= ({children}) => {

    function getHomePage(){
        const [homePage, setHomePage] = useState();
        useEffect(() => {
            fetch('https://cms.devcorp.me/homepage')
                .then(response => response.json())
                .then(_homePage => setHomePage(_homePage));
        }, [])
        return homePage
    }

    const homePage = getHomePage();
    if(!homePage){
        return <p>Loading</p>
    }

    return ( 
        <div>
            <Head>
                <title>{process.env.WEBSITE_TITLE}</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta property="og:title" content={process.env.WEBSITE_TITLE} key="title" />
                <meta name="description" content={process.env.WEBSITE_DESCRIPTION} />
                <meta name="keywords" content={process.env.WEBSITE_KEYWORDS} />
                <meta name="generator" content="Powered by Versitasoftware - versitasoftware.com"/>
            </Head>
            <Nav></Nav>
                <div>
                    <div style={{margin: "auto", position: "relative", minHeight: "100vh"}}>
                            {children}
                    </div>
                </div>

            <FooterRice home={homePage}></FooterRice>
        </div>  

     );
}
 
export default Layout;
