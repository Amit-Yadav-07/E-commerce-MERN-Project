import React from "react";
import SliderLarge from "./SliderLarge";
import SliderMedium from "./SliderMedium";
import SliderSmall from "./SliderSmall";
import { products } from "../../data/products";

let HeroSlider = () =>{

    

    return(
        <>
            {/* ---------------------------------------- */}

            <section className="py-3">
      <h2 className="py-3 fs-1">featured Products</h2>

         <SliderLarge products={products}/>
       {/* ---------------------medium-screen--------------------------------------  */}
        
       <SliderMedium /> 
        

       {/* ---------------------small-screen--------------------------------------  */}

        <SliderSmall /> 

            {/* ---------------------------------------- */}

            </section>
        </>
    )
}


export default HeroSlider;