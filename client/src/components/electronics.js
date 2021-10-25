import { useState, useEffect } from 'react';
import axios from 'axios';


const Electronics = () => {
  const [electronics, setElectronics] = useState('');



  useEffect(() => {
  
    const getElectronics = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o')
  
      console.log(resp.data.records);
      setElectronics(resp.data.records);
    }
  
    getElectronics();

  }, []);




  return (
  
<Form>
      
<label htmlFor="name" />
<input type="text" id="name">
</input>

<label htmlFor="city"/>
<input type="text" id="city">
</input>

<label htmlFor="wish" />
<input type="text" id="wish">
</input>

<input type="submit">Submit</input>


</Form>

  )
}

  

export default Electronics;