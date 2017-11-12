// action creators

//action creators

import * as ActionTypes from "./ActionTypes";

const PRODUCT_URL = "http://localhost:7070/api/products";

//action creators are plain function, they create 
//plain objects

export const addItemToCart = (product) => {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: {
                id :  product.id,
                name: product.name,
                qty: product.qty || 1,
                price: product.price
            }
        }
    }
}


export const removeItemFromCart = (id) => {
       return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id: id
        }
    }
}


export const updateItemInCart = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id: id,
            qty: parseInt(qty) || 0
        }
    }
}


export const  emptyCart = () => {
    return {
        type: ActionTypes.EMPTY_CART
    }
}


export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}

//Async function
//Ajax
// return a function
export function fetchProducts(){

    // this shall be called by thunk
    // dispatch will be provided by thunk
    return function(dispatch){
        console.log("Called by thunk");
        // console.log( new Error("Call Stack").stack ); 
        fetch(PRODUCT_URL).then(response => {
            console.log("Ajax response ", response);
            //return promise of json
            return response.json();
        }).then(products => {
            console.log("Product List ", products);
            let action = initProducts(products);
            dispatch(action);
        }).catch(err =>{
            console.log("Error occured ", new Error("Call Stack").stack)
           // return new Error("Call Stack").stack ;
        });
    }

}