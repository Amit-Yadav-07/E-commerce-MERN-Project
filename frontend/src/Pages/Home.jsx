import React, { useEffect } from "react";
import Slider from './Sliders/Slider'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/allProducts/allProductsSlice";

let Home = () => {

    

    const {products,productCategory,page,search,sort} = useSelector(state=>state.allProducts)
    const dispatch = useDispatch()
    useEffect(()=>{ 
        dispatch(getAllProducts())
    },[productCategory,page,search,sort])


    console.log(products)
    return (
        <>
            <div className="hero-image">
                <div className="inner_div">
                    <h1 className="">Welcome ! DreamShop</h1>
                    <p>Fashion fades, style lives !</p>
                </div>
            </div>

            <Slider />
        </>
    )
}


export default Home;