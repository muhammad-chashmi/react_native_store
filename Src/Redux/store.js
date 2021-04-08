import {createStore,applyMiddleware} from 'redux';
import reducers from './reducer';
import thunk from 'redux-thunk';
import initDataAction from './actions';

let store = createStore(reducers,applyMiddleware(thunk));
store.dispatch(initDataAction());

export default store;