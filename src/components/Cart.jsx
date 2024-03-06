import React, { useState } from 'react';
import { CartState } from '../Context/Context';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Cart = () => {
    const { state: { cart }, dispatch } = CartState()
    const [total,setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)*curr.qty,0))
    }, [cart])
    
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <ul className="list-group mt-5">

                            {
                                cart.length === 0 ?(
                                    <div className='text-center'>
                                        <h1 className='text-center mt-5'>Your cart is empty</h1>
                                       <Link to={"/"}>
                                       <button className='btn btn-primary mt-4'>Continue Shopping</button>

                                       </Link> 
                                    </div>
                                ):(
                                    
                                    cart.map((prod) => (
                                        <li className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2"><img src={prod.image} className='img-fluid' alt="" /></div>
                                                <div className="col-lg-2"><h4 className='ms-2'>{prod.name}</h4></div>
                                                <div className="col-lg-2"><span>₹{prod.price.split(".")[0]}</span></div>
                                                <div className="col-lg-2"><div className="rating">
                                                    <Rating rating={prod.ratings} />
                                                </div></div>
                                                <div className="col-lg-2">
                                                
                                                <select 
                                                onChange={(e) =>
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload:{
                                                        id: prod.id,
                                                        qty: e.target.value,
                                                    }
                                                })
                                                }
                                                value={prod.qty} className='pt-1 pb-1 ps-4 pe-4'>
                                                {
                                                    [...Array(prod.instock).keys()].map((x) => (
                                                        <option key={x + 1}> { x + 1}</option>
                                                    ))
                                                }
                                               
                                                </select></div>
                                                <div className="col-lg-2"> <AiFillDelete
                                                        fontSize="20px"
                                                        style={{cursor: "pointer"}}
                                                        onClick={()=>{
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload:prod,
                                    })}}
                                                    /></div>




                                            </div>
                                        </li>
                                    ))
                                
                                )
                            }

                                

                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="filters text-start">
                                <h3 className='mt-4'>Subtotal({cart.length}) items</h3>
                                <h4 className='mt-4'>Total ₹{total} </h4>
                                <button className='btn btn-info mt-4'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
