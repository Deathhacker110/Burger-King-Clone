import React, { Component } from "react";
import Header from "./components/Header";
import "./style.css";
import Body from "./components/Body";
import Items from "./components/Items";
import bkPromotions from "./components/Data";
import Appstore from "./components/Appstore";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
export default class App extends Component {
  render(){
    return (
      <>
      <Header/>
      <Body/>
      <div id="mainItems">
      {bkPromotions.map(x=><Items
      imgLink={x.imgSrc}
      headComp={x.headC}
      paraComp={x.para}
      endingComp={x.ending}/>)}
      </div>
      <Appstore/>
      <Footer/>
      <Menu/>
      </>
    );
  }
}

