import React, { Component } from "react";
export default class Header extends Component{
    render(){
        return(
            <>
            <div id="header">
                <a href="" id="menuIcon"><span><i className="fa-solid fa-bars"></i></span></a>
                <h2>BURGER KING</h2>
                <div id="cart">
                    <a href="" id="person"><span><i class="fa-solid fa-user"></i></span></a>
                    <button id="cartLink"><a href=""><i class="fa-solid fa-bag-shopping"></i>  View Cart</a></button>
                </div>
            </div></>
        )
    }
}