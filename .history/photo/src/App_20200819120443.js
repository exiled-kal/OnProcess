import React from 'react';

import { Link } from '@reach/router'
import './App.css';
import Header from './component/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Link>My Photos</Link> <Link>My Info</Link>
    </div>
  );
}

export default App;
