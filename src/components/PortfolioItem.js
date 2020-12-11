import React from "react";

const PortfolioItem = (props) => {
    return (
        <div className="PortfolioItem" style={{background: props.background}}>
            <div className="PortfolioItem__textBox">
                <h2>{props.title}</h2>
                <p>{props.decription}</p>          
            </div>
        </div>
    )
}
export default PortfolioItem