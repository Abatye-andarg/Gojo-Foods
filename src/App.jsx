import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import FoodList from './Components/FoodList/FoodList'
import Footer from './Components/Footer/Footer'
import Drinks from './Components/Drinks/Drinks'
function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }

    const [isToggled, setIsToggled] = useState(false);
  return (
    <div
     style={{
        backgroundColor: isToggled ? "#282b29" : "#b0b3b3ff",
        color: isToggled ? "white" : "black",
        minHeight: "100vh",
      }}
    >
   <Header isToggled={isToggled} setIsToggled={setIsToggled} count = {count} />
   <Home />
   <Search isToggled={isToggled} setIsToggled={setIsToggled} />
   <FoodList isToggled={isToggled} setIsToggled={setIsToggled}  onIncrement={handleIncrement} />
   <Drinks isToggled={isToggled} setIsToggled={setIsToggled} />
    <Footer isToggled={isToggled} setIsToggled={setIsToggled}  /> 
    </div>
  )
}

export default App
