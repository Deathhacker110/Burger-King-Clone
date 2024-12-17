import React from "react";
import { Component } from "react";
export default class Menu extends Component{
    render(){
        return(
            <>
            <div id="mainMenu">
                <div className="me">
                    <i class="fa-solid fa-house"></i>
                    <a href=""><h5>Home</h5></a>
                </div>
                <div className="me">
                    <i class="fa-solid fa-list"></i>
                    <a href=""><h5>menu</h5></a>
                </div>
                <div className="me">
                    <i class="fa-solid fa-tag"></i>
                    <a href=""><h5>offers</h5></a>
                </div>
                <div className="me">
                    <i class="fa-solid fa-crown"></i>
                    <a href=""><h5>Rewards</h5></a>
                </div>
            </div>
            </>
        )
    }
}