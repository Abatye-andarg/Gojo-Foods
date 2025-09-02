import './FoodList.css';
import food1 from './../../assets/food1.jpg';
import food2 from './../../assets/food2.jpg';

function FoodList({ isToggled, onIncrement }) {
  const containerStyle = {
    backgroundColor: isToggled ? "#616c5dff" : "rgba(168, 198, 187, 1)",
  };

  const foodCardStyle = {
    backgroundColor: isToggled ? "black" : "white",
    color: isToggled ? "white" : "black",
  };
  const handleCart = ()=>{

  }

  return (
   <div className="food-list" style={containerStyle}>
  <div className="row1" style={containerStyle}>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
  </div>

  <div className="row1" style={containerStyle}>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food2} alt="food2" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food2} alt="food2" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food2} alt="food2" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food2} alt="food2" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
  </div>

  <div className="row1" style={containerStyle}>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
    <div className="food-list-container" style={foodCardStyle}>
      <img src={food1} alt="food1" />
      <button onClick={onIncrement}>add to cart</button>
      <button>view ingredients</button>
    </div>
  </div>
</div>
  );
}

export default FoodList;
