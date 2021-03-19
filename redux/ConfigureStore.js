import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { products } from './productsReducer';
import { populars } from './popularDishesReducer';
import { cart } from './cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products,
            populars,
            cart
        }),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );

    return store;
}