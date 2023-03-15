import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';
import classes from './HeaderCartButton.module.css';
import Cart from '../Cart/CArt';



const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce(
        (curNumber, item) => {
            return curNumber + item.amount;
        }, 0 
    );

 return   
    <button className={classes.button} onClick={props.onClick}>
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