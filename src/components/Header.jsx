import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const { state: { cart },
    dispatch,
    productdispatch,

    } = CartState();
    return (
        <>
            <div className="header bg-dark">

                <div className="container pt-3 pb-3">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-4"><div className="logo text-white"><Link to={"/"} className='m-0'>A-Shopping</Link></div></div>
                        <div className="col-lg-4"><div className="search"><input 
                        onChange={(e)=>{
                            productdispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                            })
                        }}
                        className="search-bar" type="text" placeholder='search products' /></div></div>
                        <div className="col-lg-4 text-end"><div className="cart"></div>
                            <div className="dropdown">
                                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaShoppingCart /> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-success">
                                        {cart.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {cart.length>0?(
                                    <>
                                        {
                                            cart.map((prod)=>(
                                                <span className='cartitem'>
                                                    <img src={prod.image} className='cartItemImg' alt="" />
                                                    <div className="cartItemDetail">
                                                        <span>{prod.name}</span>
                                                        <span>₹{prod.price.split(".")[0]}</span>
                                                    </div>
                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{cursor: "pointer"}}
                                                        onClick={()=>{
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload:prod,
                                    })}}
                                                    />
                                                </span>
                                            ))
                                        }
                                        <Link to={"/cart"}>
                                        <button className='btn btn-primary' style={{width:"95%", margin:"0 10px 0 7px"}}>Go To Cart</button>

                                        </Link>
                                    </>
                                ):(
                                    <li><a className="dropdown-item" href="#">Your Cart is Empty</a></li>
                                )}
                                   

                                </ul>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
