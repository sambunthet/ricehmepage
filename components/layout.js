import Navbar from "./../components/navbar";
import Footer from './../components/Footer';


const Layout= ({children}) => {
    return ( 
        <div>
            <Navbar></Navbar>

            <div>
                <div className="" style={{margin: "auto", position: "relative", minHeight: "100vh"}}>
                         {children}
                </div>
            </div>

            <Footer></Footer>



        </div>
     );
}
 
export default Layout;