import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './form.js'


const Electronics = () => {
  const [electronics, setElectronics] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true);



  useEffect(() => {
  
    const getElectronics = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o')
  
      console.log(resp.data.records);
      setElectronics(resp.data.records);
    }
  
    getElectronics();

  }, [toggleFetch]);




  return (
    <div>
      
      <h1>Electronics</h1>
    
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
      
      <Form />
</div>
    
  )
}

  

export default Electronics;