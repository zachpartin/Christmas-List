import '../App.css'

const Other = (props) => {
  return (
    <div className="other">
      <h3>Name: {props.name}</h3>

      <h3>City: {props.city}</h3>

      <h3>Wish: {props.wish}</h3>
      
    </div>
  );
};

export default Other;