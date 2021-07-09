import Navbar from "$/components/navbar";
import FooterRice from '$/components/footer-rice';


const Layout= ({children}) => {
    return ( 
        <div>
            <Navbar></Navbar>

            <div>
                <div style={{margin: "auto", position: "relative", minHeight: "100vh"}}>
                         {children}
                </div>
            </div>

            <FooterRice></FooterRice>



        </div>
     );
}
 
export default Layout;