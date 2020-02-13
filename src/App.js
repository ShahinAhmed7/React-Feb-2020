import React from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/jquery/dist/jquery.min'
import Photos from './component/Photos'


function App() {
  return (
    <div className="App">
      <Header></Header>
        Hello World
        <Photos></Photos>
      <Footer></Footer>
    </div>
  );
}

export default App;
