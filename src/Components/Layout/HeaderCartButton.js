import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';
import classes from './HeaderCartButton.module.css';
import Cart from '../Cart/Cart';



const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce(
        (curNumber, item) => {
            return curNumber + item.amount;
        }, 0 
    );

const {items} = cartCtx;

const btnClasses = `${classes.button} ${btnIsHighlighted ?  classes.bump: ''}`;

useEffect(() => {
    if(cartCtx.items.length === 0) {
        return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
    }, 300);

    return() => {
        clearTimeout(timer);
    };
}, [items]);

 return   
    <button className={btnClasses} onClick={props.onClick}>
        <span>
            <CartIcon />
        </span>
        <span className={classes.badge}>Your Cart</span>
        <span>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;