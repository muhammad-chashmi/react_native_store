import {CART} from '../actionTypes';
import {combineReducers} from 'redux';

const cart = (state=[],action)=>{
    switch(action.type){
        case CART : return [...action.data]
        default: return state 
    }
}

export default reducers = combineReducers({cart});