import { useReducer } from 'react';
import CartContext from './Cart-Context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};



const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
       
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
            );
            
            const existingCartItem  = state.items[existingCartItemIndex];
            let updatedItem;

            if (existingCartItem) {
              const updatedItem ={
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;  
            } else {
                updatedItem = state.item.concat(action.item);
                
            }
       

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1 ) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            } else {
               const updatedItem = {...existingItem, amount: existingItem.amount -1};
               updatedItems = {...state.items};
               updatedItems[existingCartItemIndex] = updatedItem;   
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
    };

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