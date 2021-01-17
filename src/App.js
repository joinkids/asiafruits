import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Products from './Components/Products'
import Buying from './Components/Buying'
import Footer from './Components/Footer'




export default function App(props) {
    return (
      <div>
        <Header/>
        <Products itemData = {props.state.products.itemData}/>
        <Buying/>
        <Footer/>
      </div>
    );
  }



