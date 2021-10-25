import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './form.js'


const Electronics = (props) => {
  const [electronics, setElectronics] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);



  useEffect(() => {
  
    const getElectronics = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o')
  
      
      setElectronics(resp.data.records);
    }
  
    getElectronics();

  }, [], toggleFetch);




  return (
    <div>
    
{/* //   <form>
        
        
//     <label htmlFor="name">Name: </label>
//     <input type="text" id="name">
//         </input>
//         <br/>
        

//     <label htmlFor="city">City: </label>
//     <input type="text" id="city">
//         </input>
//         <br/>

//     <label htmlFor="wish"></label>Wish! <label/>
//     <input type="text" id="wish">
//       </input>
//       <br/>

//     <input type="submit"></input>

//   </form> */}

      <h3>
        Name: {props.name} 
      </h3>
      <h3>
        City: {props.city}
      </h3>
      <h3>
        Wish: {props.wish}
      </h3>
      <hr />
</div>
    
  )
}

  

export default Electronics;