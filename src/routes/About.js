import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/about.jpg";
function About(){
    return(
        <>
         <Navbar />
        <Hero
        
        cName="hero-mid"
        heroimg={AboutImg}
        title="About"
        text="we are passionate about making your travel dreams a reality. Whether you're planning a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we have got you covered. Our mission is to provide you with the best destinations, top-notch accommodations, and affordable travel options that fit your budget."
        buttonText="Travel Plan"
        url="/"
        btnClass="hide"

        />
        
        </>


    )

}
export default About;