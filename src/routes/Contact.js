import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../Assets/contact.jpg";
function Contact(){
    return(
        <>
         <Navbar />
        <Hero
        
         cName="hero"
        heroimg={ContactImg}
        title="Contact"
        text="------"
        url="/"
        btnClass="hide"
            />
        
        </>


    )

}
export default Contact;