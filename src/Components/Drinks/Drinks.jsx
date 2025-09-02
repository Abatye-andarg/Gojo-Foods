import { useState } from 'react'
import './Drinks.css';
import { drink1, drink2, drink3, drink4, drink } from '../../assets';
import  gradientImage from './../../assets/gradient-image.png';
import blackGradient from './../../assets/blackGradient.png';
function Drinks({isToggled }) {

const drinkContainerStyle = {
 backgroundColor: isToggled ? "#616c5dff" : "rgba(168, 198, 187, 1)",
}
const styleH1 = {
 backgroundImage: `url(${isToggled ? gradientImage : blackGradient})`,
}

  const drinkCardStyle = {
    backgroundColor: isToggled ? "black" : "white",
    color: isToggled ? "white" : "black",
  };


    return (
        <div className="drink-list" style = {drinkContainerStyle}>
            <h1 className = "styleHeading" style = {styleH1}>Try Our Drinks...</h1>
            <div className="drink-list-container" style = {drinkContainerStyle}>
                <div style = {drinkCardStyle}>
                    <img src={drink} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
                <div style = {drinkCardStyle}>
                    <img src={drink1} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
                   <div style = {drinkCardStyle}>
                    <img src={drink2} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
                   <div style = {drinkCardStyle}>
                    <img src={drink3} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
            </div>

            <div className="drink-list-container" style = {drinkContainerStyle}>
                    <div style = {drinkCardStyle}>
                    <img src={drink} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
                    <div style = {drinkCardStyle}>
                    <img src={drink1} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
                 <div style = {drinkCardStyle}>
                    <img src={drink2} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
                     <div style = {drinkCardStyle}>
                    <img src={drink4} alt="food1" />
                    <button>add to cart</button>
                    <button>view incgredients</button>
                </div>
            </div>

        </div>
    )
}

export default Drinks
