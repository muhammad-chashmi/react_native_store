import {CART} from '../actionTypes';
import {cartStorage} from '../storage';
import {AsyncStorage} from '@react-native-community/async-storage';

export default initDataAction = ()=>{
    return async dispatch =>{
        await AsyncStorage.getItem(cartStorage)
        .then(products=>{
            if(products!=null)
                products= JSON.parse(products)
            else
            products = []; 
            
            dispatch({type:CART,data:products});

        })
    }
}
