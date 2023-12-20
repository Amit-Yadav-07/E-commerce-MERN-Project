import React, { useEffect } from 'react';
import '../Common.css';
import {NavLink, useLocation, useNavigate} from "react-router-dom"
import { navLinks } from '../../data/nav-links';
import { useDispatch,useSelector} from 'react-redux'
import { handleChange } from '../../features/allProducts/allProductsSlice';
import { countWords } from '../../utils/textUtils';

function SecondHead() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    


    if(location.pathname==='/admin/dashboard/AddProduct' || location.pathname==='/admin/dashboard/AllProducts'){
        return <> </>
    }
    
    return (
        <>
            <ul className="nav justify-content-center">
                {
                    navLinks.map((navLink)=>{
                        if(navLink.text==='Home'){
                            return <li key={navLink.id} className="nav-item">
                            <span
                                className="nav-link active text-white"
                                style={{ fontSize: '1.4rem', fontFamily: 'poppins', fontWeight: 'bold',cursor:'pointer' }}
                                onClick={()=>navigate('/')}
                                >{navLink.text}</span>
                        </li>
                        }
                        if(navLink.children.length===0){
                            if(countWords(navLink.text) > 1){
                                navLink.text = navLink.text.replace(/ /g,'-');
                            }
                        return    <li key={navLink.id} className="nav-item">
                        <span
                            className="nav-link active text-white"
                            style={{ fontSize: '1.4rem', fontFamily: 'poppins', fontWeight: 'bold' }}
                            onClick={()=>{
                                navigate('/all-products');
                                dispatch(handleChange({name:'productCategory',value:navLink.text.toLowerCase()}))
                            }
                                
                            }
                            >{navLink.text}</span>
                    </li>
                        }else{
                           return <li key={navLink.id} className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white dropdown-item"
                                // data-bs-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                style={{ fontSize: '1.4rem', fontFamily: 'poppins', fontWeight: 'bold' }}>{navLink.text}</a>
                            <ul className="dropdown-menu">
                                
                              {navLink.children.map((navLinkChild)=>{
                                return <li><span  onClick={()=>
                                  {
                                    navigate('/all-products')
                                    dispatch(handleChange({name:'productCategory',value:`${navLink.text.toLowerCase()}`+`/`+`${navLinkChild.text.toLowerCase()}`}))
                                  }
                            }
                                 style={{fontSize:'1rem',cursor:'pointer'}} className="dropdown-item" href={navLinkChild.path}>{navLinkChild.text}</span></li>
                              })}
                            </ul>
                        </li>
                        }
                    })
                }             
            </ul>
        </>
    )
}

export default SecondHead;