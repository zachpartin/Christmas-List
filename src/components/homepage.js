import '../App.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      
      <div className="buttondiv">
      <h2>What type of gift would you like?</h2>
        <Link to="/electronics">
        <button>Electronics</button>
        </Link>

        <Link to="/toys">
        <button>Toys</button>
        </Link>

        <Link to="/sportinggoods">
        <button>Sporting Goods</button>
        </Link>

        <Link to="/clothing">
        <button>Clothing</button>
        </Link>

        <Link to="/other">
        <button>Other</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
