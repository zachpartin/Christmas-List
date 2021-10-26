import logo from './logo.svg';
import './App.css';
import Electronics from './components/electronics.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Homepage from './components/homepage.js'
import Form from './components/form.js'
import Toys from './components/toys.js';


function App() {
  const [electronics, setElectronics] = useState([]);
  const [toys, setToys] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  // const [toggleFetch, setToggleFetch] = useState(false);

  const electronicsUrl = 'https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o';
  const toysUrl = 'https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Toys?api_key=keyuw9Igy9sTDLK9o';
  
  
  useEffect(() => {
      const getElectronics = async () => {
        const resp = await axios.get(electronicsUrl);
        console.log(resp.data.records);
        setElectronics(resp.data.records);
      }
      getElectronics();
  }, [])
  
  
  useEffect(() => {
    const getToys = async () => {
      const resp = await axios.get(toysUrl);
      console.log(resp.data.records);
      setToys(resp.data.records);
    }
    getToys();
  }, [])


    
  



  return (
      
<div className="App">
      
<nav>
  <Link to="/">Home</Link>
  <Link to="/electronics">Electronics</Link>
        <Link to="/toys">Toys</Link>
        <Link to="/form">Form</Link>
</nav>

<Route path="/" exact>
  <Homepage />
      </Route>
      

<Route path="/form">
<Form />
  </Route>


<Route path="/electronics">
          
    <h1>Electronics</h1>
          
    <Form
          url={electronicsUrl}
          
    />

          {electronics.map((electronic) => (
            <Electronics
              key={electronic.id}
              name={electronic.fields.Name}
              city={electronic.fields.City}
              wish={electronic.fields.Wish}
            />
       ))}  
        </Route>
        
<Route path="/toys">
        <h1>Toys</h1>
        
        <Form
          url={toysUrl}
          
        />
          
        {toys.map((toy) => (
          <Toys
            key={toy.id}
            name={toy.fields.Name}
            city={toy.fields.City}
            wish={toy.fields.Wish}
          />
        ))}

</Route>

      

</div>
    );
  }


export default App;
