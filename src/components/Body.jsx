import React, { Component } from "react";
export default class Body extends Component{
    render(){
        return(
            <>
            <div id="body">
                <div id="content" class="body1">
                    <h1>Start your <pre></pre>BK® order.</h1>
                    <button id="pick"><span><i class="fa-solid fa-bag-shopping"></i></span><span> </span>Order Pickup</button>
                    <button id="del"><span><i class="fas fa-bicycle"></i></span><span> </span>Order Delivery</button>
                </div>
                <div id="image" class="body1">
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/992ab9282f7352ad6d92ce74d86446c8ad758336-800x450.png?w=1350&q=90&fit=max&auto=format" alt="" />
                </div>
            </div>
            </>
        )
    }
}