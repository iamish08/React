import { createStore, combineReducers } from 'redux';
import { dishes} from './dishes.js';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {promotions} from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : dishes,
            comments : Comments,
            promotions : promotions,
            leaders : Leaders
        })
    );

    return store;
}