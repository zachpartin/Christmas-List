import '../App.css';
import './toys.css';

const Toys = (props) => {
  return (
    <div className="toy">
      <h3>Name: {props.name}</h3>

      <h3>City: {props.city}</h3>

      <h3>Wish: {props.wish}</h3>
      
    </div>
  );
};

export default Toys;
