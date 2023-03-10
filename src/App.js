import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import { Fragment } from 'react';

function App() {
  return (
      <Fragment>
          <Header />
          <main>
            <Meals />
          </main>
      </Fragment>
  );
}

export default App;
