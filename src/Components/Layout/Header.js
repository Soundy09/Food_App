
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return
        <Fragment>
            <header className={classes.header}>
                <h1>Rosoc's Diner!</h1>
                <HeaderCartButton className={classes.button} />Cart 
                <div classes={classes['main-image']}>
                    <img src={mealsImage} alt="rosco's favs"/>
                </div>
            </header>
        </Fragment>

};

export default Header;