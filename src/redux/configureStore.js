import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dishes} from './dishes.js';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : dishes,
            comments : Comments,
            promotions : promotions,
            leaders : Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}