import logo from './logo.svg';
import './App.css';
import Electronics from './components/electronics.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Homepage from './components/homepage.js'


function App() {
const [electronics, setElectronics] = useState('');
  
  
    useEffect(() => {
      const getElectronics = async () => {
        const resp = await axios.get('https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o');
    
        console.log(resp.data.records);

        setElectronics(resp.data.records);
      }
    
      getElectronics();

    }, [])
    
  



    return (
      <div className="App">
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link> 
      </nav>

     <Route path="/" exact>
      <Homepage />
    </Route>


        <Route path="/electronics">
          {electronics.map((electronic) => (
         <Electronics />
       ))}   
      
      </Route>

      </div>
    );
  }


export default App;
