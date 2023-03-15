import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/CArt';
import CartProvider from './Store/Cart-Provider';
import { useState } from 'react';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
      <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler}/>}
          <Header onShowCart={showCartHandler} />
          <main>
            <Meals />
          </main>
      </CartProvider>
  );
}

export default App;
