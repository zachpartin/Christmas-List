import "../App.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item interval={3500}>
            <img
              className="xmaspics"
              src="https://media.timeout.com/images/105644175/750/422/image.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="xmaspics"
              src="https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4ODE4ODA4MzY1MDAwNDY1/christmas-gettyimages-184652817.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="xmaspics"
              src="https://townsquare.media/site/782/files/2018/11/Christmas-Tree-Carson-Ganci.jpg?w=980&q=75"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

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

        <h5>Select a category, then submit an electronic form for your wish</h5>
      </div>
    </div>
  );
};

export default Homepage;
