import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Products from './Components/Products'
import Buying from './Components/Buying'
import Footer from './Components/Footer'




class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Products/>
        <Buying/>
        <Footer/>
      </div>
    );
  }
}

export default App;
