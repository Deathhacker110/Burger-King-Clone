import React, { Component } from "react";
export default class Items extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div className="items">
                <a href=""><button className="imgBut"><img className="itemImg" src={this.props.imgLink} alt="" /></button></a>
                <h1 className="imgh1">{this.props.headComp}</h1>
                <p className="imgp">{this.props.paraComp}</p>
                <button className="imgbuy">{this.props.endingComp}</button>
            </div>
            </>
        )
    }
}