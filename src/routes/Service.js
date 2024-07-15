import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../Assets/service.jpg";
function Service(){
    return(
        <>
         <Navbar />
        <Hero
        
         cName="hero"
        heroimg={ServiceImg}
        title="Service"
        text="Destination Management --- Hotel Bookings --- Cost-Effective Travel"
        url="/"
        btnClass="hide"
            />
        
        </>


    )

}
export default Service;