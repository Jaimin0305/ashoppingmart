import React from 'react';
import Rating from './Rating';
import { CartState } from '../Context/Context';

const SingleProduct = ({prod}) => {
    const {state : {cart},
           dispatch,
         }  = CartState();
        //  console.log(cart);
    return (
        <>
            <div className="col-lg-4">
                <div className="card">
                    <img src={prod.image} className="card-img-top" alt="product_img" />
                    <div className="card-body d-flex  flex-column">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text m-0">₹{prod.price.split(".")[0]}</p>
                        {
                            prod.fastDelivery ?(
                                <div>Fast Delivery</div>
                            ):(
                                <div>4 Days Delivery</div>
                            )
                        }
                        <div className="rating">
                        <Rating rating={prod.ratings}/>
                        </div>
                        {
                            cart.some(p=>p.id ===prod.id)?(
                        <button onClick={()=>{
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload:prod,
                                    })
                                }} className='btn btn-danger w-30 mt-2'>Remove From Cart</button>

                            ):(
                                <button onClick={()=>{
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload:prod,
                                    })
                                }} disabled={!prod.instock} className='btn btn-warning w-30 mt-2'>{
                            !prod.instock ? "Out of Stock" : "Add to cart"
                        }</button>
                            )
                        }

                        


                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;
