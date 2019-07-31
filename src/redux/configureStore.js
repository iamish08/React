import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import { dishes} from './dishes.js';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : dishes,
            comments : Comments,
            promotions : promotions,
            leaders : Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}