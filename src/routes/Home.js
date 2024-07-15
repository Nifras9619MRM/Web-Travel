import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../Assets/homemap.jpg";
import Distination from "../components/Distination";

function Home(){
    return(
        <>
        <Navbar />
        <Hero
        
        cName="hero"
        heroimg={HomeImg}
        title="Lets Make New Story"
        text="Choose You Distination"
        buttonText="Travel Plan"
        url="Aboutcopy"
        btnClass="show"

        />
        <Distination/>

        
        </>


    )

}
export default Home;