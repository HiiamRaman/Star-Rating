import { useState } from "react";

export default function Star({ starCount = 10 }) {
  const [starValue, setStarvalue] = useState();
  const [hoverValue, sethoverValue] = useState();
  
  console.log(hoverValue);
  

  return (
    <div className="container">
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span
            className={index < starValue  || index < hoverValue?"gold" : ""}
            key={index}  



            onClick= {() => setStarvalue(index + 1)}
            onMouseEnter={() => sethoverValue(index+1)}
            onMouseLeave={()=> sethoverValue(0)}
          >
          
            &#8902;
          </span>
        );
      })}
    </div>
  );
}
