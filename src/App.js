import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Aboutcopy from "./routes/Aboutcopy";
import Dashboard from "./routes/Dashboards";
import Homecopy from "./routes/Homecopy";
import Profile from "./routes/Profile";
import Destinations from "./routes/Destinations";



export default function App(){

return(
<div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Aboutcopy" element={<Aboutcopy/>}/>
      <Route path="/Dashboard" components={<Dashboard/>}/>
      <Route path="/Homecopy" components={<Homecopy/>}/>
      <Route path="/Profile" components={<Profile/>}/>
      <Route path="/Destinations" components={<Destinations/>}/>

    </Routes> 
    

</div>

)

}