const SportingGoods = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>

      <h3>City: {props.city}</h3>

      <h3>Wish: {props.wish}</h3>
      <hr />
    </div>
  );
};

export default SportingGoods;