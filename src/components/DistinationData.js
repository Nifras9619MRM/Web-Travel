import { Component } from "react";
import s1 from "../Assets/sigiriya1.jpg";
import s2 from "../Assets/sigiriya2.jpeg";
import "./DistinationStyles.css";
import Distination from "./Distination";

class DistinationData extends Component{
    render(){
        return(

            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
            {this.props.text}
            </div>
            <div className="image">
                <img alt="img1" src={this.props.img1}/>
                <img alt="img2" src={this.props.img2}/>
            </div>
        </div>


        )
    
}
}
export default DistinationData;