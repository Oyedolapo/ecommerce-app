import React, { createContext, useReducer, useContext} from 'react';

const initialState = {
    cart: [],
    wishlist: [],
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

const storeReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]};
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.name !== action.payload.name) };
        case ADD_TO_WISHLIST:
            return { ...state, wishlist: [...state.wishlist, action.payload] };
        case REMOVE_FROM_WISHLIST:
            return { ...state, wishlist: state.wishlist.filter(item => item.name !== action.payload.name) };
        default: 
            return state;
    }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};

export const useStore = () => useContext(StoreContext);

