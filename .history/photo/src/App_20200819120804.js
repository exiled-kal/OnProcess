import React from 'react';

import {Link} from '@reach/router';
import './App.css';
import Header from './component/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Link to="">My photos</Link>
    </div>
  );
}

export default App;
