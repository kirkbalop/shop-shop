import { createStore } from 'redux';
import { provide } from 'react-redux';

import {
    UPDATE_PRODUCTS,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_CATEGORIES,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART,
  } from "./actions.js";

import productReducer from './reducers';