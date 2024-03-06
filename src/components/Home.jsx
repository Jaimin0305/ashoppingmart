import React from 'react';
import { CartState } from '../Context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Home = () => {
    const { state: { products }, 
    productstate:{byStock,byFastDelivery,byRating,sort,searchQuerey}
} = CartState();

    const transformProducts = () =>{
            let sortedProducts = products;
            if(sort){
                sortedProducts = sortedProducts.sort((a,b) =>
                    sort=== 'lowtoHigh' ? a.price - b.price : b.price - a.price
                );
            }
            if(!byStock){
                sortedProducts = sortedProducts.filter((prod) => prod.instock);
            }
            if(byFastDelivery){
                sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
            }
            if(byRating){
                sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
            }
            if(searchQuerey){
                sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuerey));
            }
            return sortedProducts;
    }
    return (
        <>
            <div className="home">
            <div className="container">

            <div className="row gx-5">
            <div className="col-lg-3 p-0 ">
            <Filters/>
            </div>

            <div className="col-lg-9 p-0">

              

                <div className="product mt-5">
                <div className="container">
                    
                        <div className="row gy-4">
                            {
                                transformProducts().map((prod) => {
                                    return <SingleProduct prod={prod} key={prod.id}/>
                                })
                            }
                        </div>
                    
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Home;