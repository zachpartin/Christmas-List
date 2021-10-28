import "./App.css";
import Electronics from "./components/electronics.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Homepage from "./components/homepage.js";
import ElectronicsForm from "./components/electronicsform.js";
import ToysForm from "./components/toysform.js";
import Toys from "./components/toys.js";
import OtherForm from "./components/otherform.js";
import Other from "./components/other.js";
import SportingGoods from "./components/sportinggoods.js";
import SportingGoodsForm from "./components/sportinggoodsform.js";
import Clothing from "./components/clothing.js";
import ClothingForm from "./components/clothingform.js";
import Header from "./components/header";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [electronics, setElectronics] = useState([]);
  const [toys, setToys] = useState([]);
  const [other, setOther] = useState([]);
  const [sportingGoods, setSportingGoods] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  const electronicsUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o";
  const toysUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Toys?api_key=keyuw9Igy9sTDLK9o";
  const otherUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Other?api_key=keyuw9Igy9sTDLK9o";
  const sportingGoodsUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Sporting%20Goods?api_key=keyuw9Igy9sTDLK9o";
  const clothingUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Clothing?api_key=keyuw9Igy9sTDLK9o";

  useEffect(() => {
    const getElectronics = async () => {
      const resp = await axios.get(electronicsUrl);
      console.log(resp.data.records);
      setElectronics(resp.data.records);
    };
    getElectronics();
  }, [toggleFetch]);

  useEffect(() => {
    const getToys = async () => {
      const resp = await axios.get(toysUrl);
      console.log(resp.data.records);
      setToys(resp.data.records);
    };
    getToys();
  }, [toggleFetch]);

  useEffect(() => {
    const getOther = async () => {
      const resp = await axios.get(otherUrl);
      console.log(resp.data.records);
      setOther(resp.data.records);
    };
    getOther();
  }, [toggleFetch]);

  useEffect(() => {
    const getSportingGoods = async () => {
      const resp = await axios.get(sportingGoodsUrl);
      console.log(resp.data.records);
      setSportingGoods(resp.data.records);
    };
    getSportingGoods();
  }, [toggleFetch]);

  useEffect(() => {
    const getClothing = async () => {
      const resp = await axios.get(clothingUrl);
      console.log(resp.data.records);
      setClothing(resp.data.records);
    };
    getClothing();
  }, [toggleFetch]);

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/toys">Toys</Link>
        <Link to="/sportinggoods">Sporting Goods</Link>
        <Link to="/clothing">Clothing</Link>
        <Link to="/other">Other</Link>
      </nav>

      <Header />

      <Route path="/" exact>
        <Homepage />
      </Route>

      <Route path="/electronics">
        <div className="">
          <h1>Electronics</h1>
        </div>
        <ElectronicsForm
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />

        <div className="electronicsdiv">
          {electronics.map((electronic) => (
            <Electronics
              key={electronic.id}
              name={electronic.fields.Name}
              city={electronic.fields.City}
              wish={electronic.fields.Wish}
            />
          ))}
        </div>
      </Route>

      <Route path="/toys">
        <h1>Toys</h1>

        <ToysForm setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />

        <div className="toydiv">
          {toys.map((toy) => (
            <Toys
              key={toy.id}
              name={toy.fields.Name}
              city={toy.fields.City}
              wish={toy.fields.Wish}
            />
          ))}
        </div>
      </Route>

      <Route path="/other">
        <h1>Other</h1>

        <OtherForm setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />

        <div className="otherdiv">
          {other.map((other) => (
            <Other
              key={other.id}
              name={other.fields.Name}
              city={other.fields.City}
              wish={other.fields.Wish}
            />
          ))}
        </div>
      </Route>

      <Route path="/sportinggoods">
        <h1>Sporting Goods</h1>

        <SportingGoodsForm
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />

        <div className="sportinggoodsdiv">
          {sportingGoods.map((sportingGood) => (
            <SportingGoods
              key={sportingGood.id}
              name={sportingGood.fields.Name}
              city={sportingGood.fields.City}
              wish={sportingGood.fields.Wish}
            />
          ))}
        </div>
      </Route>

      <Route path="/clothing">
        <h1>Clothing</h1>

        <ClothingForm
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />

        <div className="clothingdiv">
          {clothing.map((garment) => (
            <Clothing
              key={garment.id}
              name={garment.fields.Name}
              city={garment.fields.City}
              wish={garment.fields.Wish}
            />
          ))}
        </div>
      </Route>
    </div>
  );
}

export default App;
