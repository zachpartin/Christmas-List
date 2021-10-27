import '../App.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Virtual Christmas List</h1>
      <h4>A Christmas List for the 21st Century</h4>

      <div className="buttondiv">
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
