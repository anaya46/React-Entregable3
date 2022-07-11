import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';
import Location from "./components/Location"
import imgHeader from "../src/assets/img/imgHeader.png"
import logo from "../src/logo.png"
import ResidentInfo from './components/ResidentInfo';


function App() {
  return (
    //<div className="App">
      //<img className='imgHeader' src={imgHeader} alt="" />
      //<img className='logo' src={logo} alt="" />
    <div className='conatiner-header-img'>
      <img className='logo' src={logo} alt="" />
     

      <>
        <Location/>
        
      </>
          
      </div>
  )
  }

export default App
