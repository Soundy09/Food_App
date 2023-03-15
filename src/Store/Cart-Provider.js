import { useReducer } from 'react';
import CartContext from './Cart-Context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};



const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat();
    }
    return defaultCartState
};

const CartProvider = props => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHanlder = (item) => {
        dispatchCartActions({identifier: 'ADD_ITEM', item: item});
    };

    const removeIteFromCartHandler = (id) => {
        dispatchCartActions({identifier: 'REMOVE_ITEM', id: id});
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHanlder,
        removeItem: removeIteFromCartHandler
    };


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider