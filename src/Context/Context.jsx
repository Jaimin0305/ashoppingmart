
import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
import { productReducer } from './Reducer';

const Carts = createContext();
faker.seed(99);

const Context = ({children}) => {

    const products = [...Array(20)].map(() =>({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
        instock: faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5]),

    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    });

    const [productstate, productdispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery:false,
    byRating:0,
    searchQuerey:"",
  });
    return (
    <>
      <Carts.Provider value={{state, dispatch,productstate, productdispatch}} >
        {children}
      </Carts.Provider>
    </>
  )
}

export default Context;
export const  CartState = () => {
    return useContext(Carts);
};
