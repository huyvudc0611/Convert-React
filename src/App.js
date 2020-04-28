import React from 'react';
import './App.css';
import TopMenu from './Components/menutop/TopMenu'
import Header from './Components/Header/Header'
import Session from './Components/Session/Session'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <TopMenu/>
     <Header/>
     <Session  tieude="This is my fist title" noidung="This is my fist content" vitri_1="order-lg-2" vitri_2="order-lg-1" anh="01.jpg"/>
     <Session tieude="This is my second title" noidung="This is my second content" vitri_1="order-lg-1" vitri_2="order-lg-2" anh="02.jpg"/>
     <Session tieude="This is my third content" noidung="This is my third content"  vitri_1="order-lg-2" vitri_2="order-lg-1" anh ="03.jpg"/>
     <Footer/>
    </div>
  );
}

export default App;
