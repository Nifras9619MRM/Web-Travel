import "./DistinationStyles.css";
import s1 from "../Assets/sigiriya1.jpg";
import s2 from "../Assets/sigiriya2.jpeg";
import s3 from "../Assets/Mirasa1.jpg";
import s4 from "../Assets/Mirasa2.jpg";
import s5 from "../Assets/end1.jpeg";
import s6 from "../Assets/end2.jpg";
import s7 from "../Assets/nine1.webp";
import s8 from "../Assets/nine2.jpg";
import DistinationData from "../components/DistinationData";


const Distination = ()=>{
     return(

        <div className="distination">
                <h1>Poruler Distination</h1>
                <p>Magic Travel </p>

            <DistinationData
            className="first-des"
            heading="Sigiriya"

            text ="Sigiriya, also known as Lion Rock, is one of Sri Lanka's most iconic landmarks and a 
            UNESCO World Heritage Site. This ancient rock fortress, rising dramatically from the 
            central plains, is a marvel of engineering, architecture, and artistry.
         History:  
            Built by King Kasyapa in the 5th century AD, Sigiriya served as a royal palace and 
            fortress. The site showcases advanced urban planning and sophisticated hydraulic systems,
            including water gardens that are still functional today. After King Kasyapa's death, 
            Sigiriya became a Buddhist monastery until the 14th century.

        The Rock Fortress: 
           The centerpiece of Sigiriya is the massive rock column, nearly 200 meters high, which 
            was transformed into a palace complex. Visitors can explore the remains of the king's 
            palace, including the Mirror Wall adorned with ancient graffiti and the famous frescoes 
            of celestial maidens, known as the Sigiriya Damsels."

            img1={s1}
            img2={s2}
            
            
            />
            
            <DistinationData
            className="first-des-revers"
            heading="Mirissa"

            text ="Mirissa, a charming coastal town in southern Sri Lanka, is renowned for its stunning beaches, 
            vibrant nightlife, and exceptional whale watching opportunities. The golden sands and crystal-clear 
            waters make it perfect for sunbathing, swimming, and surfing, while Secret Beach offers a tranquil escape.
             Visitors can enjoy a variety of water sports, witness traditional stilt fishermen, and explore Parrot 
             Rock for panoramic views. Mirissa's lively beachfront bars and restaurants serve fresh seafood and local 
             cuisine, adding to the town's appeal as a laid-back yet adventurous destination."

            img1={s3}
            img2={s4}
            
            
            />

<DistinationData
            className="first-des"
            heading="World End"

            text ="Also known as Lion Rock, is one of Sri Lanka's most iconic landmarks and a 
            UNESCO World Heritage Site. This ancient rock fortress, rising dramatically from the 
            central plains, is a marvel of engineering, architecture, and artistry.
         History:  
            Built by King Kasyapa in the 5th century AD, Sigiriya served as a royal palace and 
            fortress. The site showcases advanced urban planning and sophisticated hydraulic systems,
            including water gardens that are still functional today. After King Kasyapa's death, 
            Sigiriya became a Buddhist monastery until the 14th century.

        The Rock Fortress: 
           The centerpiece of Sigiriya is the massive rock column, nearly 200 meters high, which 
            was transformed into a palace complex. Visitors can explore the remains of the king's 
            palace, including the Mirror Wall adorned with ancient graffiti and the famous frescoes 
            of celestial maidens, known as the Sigiriya Damsels."

            img1={s5}
            img2={s6}
            
            
            />
            
            <DistinationData
            className="first-des-revers"
            heading="Nine Arch"

            text ="A charming coastal town in southern Sri Lanka, is renowned for its stunning beaches, 
            vibrant nightlife, and exceptional whale watching opportunities. The golden sands and crystal-clear 
            waters make it perfect for sunbathing, swimming, and surfing, while Secret Beach offers a tranquil escape.
             Visitors can enjoy a variety of water sports, witness traditional stilt fishermen, and explore Parrot 
             Rock for panoramic views. Mirissa's lively beachfront bars and restaurants serve fresh seafood and local 
             cuisine, adding to the town's appeal as a laid-back yet adventurous destination."

            img1={s7}
            img2={s8}
            
            
            />

        </div>

     );
};
export default Distination;