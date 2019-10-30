import React, { Component } from 'react';
import './App.css';
import './main/Calculator';
import Calculator from './main/Calculator';
import imageLogo from './logo512.png'



export default class App extends Component{
  render(){
    return(
      
      <div>
        <img className='image' src={imageLogo} alt='Logo da aplicação' />
        <h1 className='calculadora' >Calculadora</h1>
      <Calculator />
      </div>
    )
  }

}


