// action creators

//action creators

import * as ActionTypes from "./ActionTypes";

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
