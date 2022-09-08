import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import { cuisines } from './cuisines';
import { recipes} from './recipes';

const reducer = combineReducers({cuisines, recipes})
export const store = createStore(reducer, applyMiddleware(thunk))



