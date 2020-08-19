import React from 'react';

import './App.css';
import Header from './component/header/Header';

function App() {
  return (
    <div className="app">
      <img
              src="https://pbs.twimg.com/profile_images/1864904997/383756_10150595707986414_636991413_10897349_1091730349_n.jpg"
              alt="avatar"
              style={{height: '250px'}}
            />
      <h1>Welcome to my Photo album</h1>
      <Header />
    </div>
  );
}

export default App;
