
import classes from './Header.module.css';
// import mealsImage from '../../assets/meals.jpg';
import rosco from '../../assets/rosco.png';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Rosoco's Diner!</h1>
                <HeaderCartButton onClick={props.onShowCart} />
                </header>
                <div className={classes.imageContainer}>
                <div classes={classes['main-image']}>
                    <img src={rosco} alt="rosco's favs"/>
                </div>
                </div>
        </Fragment>
    );
};

export default Header;