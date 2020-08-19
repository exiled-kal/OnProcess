import React from 'react';

import {Link} from '@reach/router';
import './App.css';
import Header from './component/header/Header';
import Card from './component/Card/Card';

function App() {
  return (
    <div className="app">
      <div className="app__container
      ">
        <Header />
        <div>
          <Link to="/">My Photos</Link> | <Link to="">My Info</Link>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
