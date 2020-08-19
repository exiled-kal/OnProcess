import React from 'react';

import {Link} from '@reach/router';
import './App.css';
import Header from './component/header/Header';
import Card from './component/Card/Card';

function App() {
  return (
    <div className="app">
      <Header />
      <Link to="/">My Photos</Link> | <Link to="">My Info</Link>
      <Card />
    </div>
  );
}

export default App;
