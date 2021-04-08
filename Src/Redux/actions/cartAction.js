import { CART } from '../actionTypes';
import { cartStorage } from '../storage';
import { AsyncStorage } from '@react-native-community/async-storage';

export const addToCartAction = newProduct => {
    return async (dispatch, getState) => {
        let products = [...getState()[cartStorage], { ...newProduct }];
        await AsyncStorage.setItem(cartStorage, JSON.stringify(products));
        dispatch({ type: CART, data: products });
    }
}

export const deleteFromCartAction = productId => {
    return async dispatch => {
        await AsyncStorage.getItem(cartStorage)
            .then(data => {
                let cartProduct = JSON.parse(data)
                return cartProduct.filter(p => p.id != productId);
            })
            .then(products => {
                AsyncStorage.setItem(cartStorage, JSON.stringify(products));
                dispatch({ type: CART, data: products });
            })
    }
}

export const editProductCountFromCartAction = (productId, selectedCount) => {
    return async dispatch => {
        await AsyncStorage.getItem(cartStorage)
            .then(data => {
                let cartProducts = JSON.parse(data)

                cartProducts.forEach(p => {
                    if (p.id == productId) {
                        p.selectedCount = selectedCount;
                    }
                });
                return cartProducts;
                // return cartProduct.filter(p=>p.id !=productId);
            })
            .then(products => {
                AsyncStorage.setItem(cartStorage, JSON.stringify(products));
                dispatch({ type: CART, data: products });
            })
    }
}

export const emptyCartAction = () => {
    return async dispatch => {
        await AsyncStorage.setItem(cartStorage,JSON.stringify([]));
        dispatch({ type: CART, data:[]});
    }
}