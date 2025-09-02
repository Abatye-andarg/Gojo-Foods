import { useState } from 'react'
import './Header.css'
import cart from './../../assets/cart.png';
function Header({ isToggled, setIsToggled, count }) {
const [counter, setCounter] = useState("0");
  const handleToggle = () => {
    setIsToggled(!isToggled);
  }
  return (
    <div className="header-main"
    style = {{backgroundColor : isToggled ? "#565c58": "rgba(209, 199, 184, 1)"}}
    >
      <div className="gojo">
        <h1>Gojo Food</h1>
      </div>

      <div className="cart">
        <div className="counter">+{count}</div>
        <img src={cart} alt="cart-img" className="cart-img" />
        
      </div>
     
      <h1
        onClick={handleToggle}
        className="toggle"
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          cursor: "pointer",
          transition: "color 2s",

          color: isToggled ? "white" : "black"
        }}


      >
        {isToggled ? "☀︎":"🌙"}
      </h1>
    </div>
  )

}

export default Header
