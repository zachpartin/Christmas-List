import { useState, useEffect } from 'react';
import axios from 'axios';


const Form = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [wish, setWish] = useState('');
  const [toggleFetch, setToggleFetch] = useState(false);

  const electronicsUrl = 'https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o';


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("submitted");

    const newWish = {
      
      "records": [
        {
          "fields": {
            "Name": name,
            "Wish": wish,
            "City": city
          }
        }
      ]
    }

    await axios.post(electronicsUrl, newWish);

    setToggleFetch(!toggleFetch);



  }





  return (

<div>
  
<form onSubmit={handleSubmit}>
      
      
  <label htmlFor="name">Name: </label>
  <input type="text" id="name" onChange={(ev)=> setName(ev.target.value)}>
      </input>
      <br/>
      

  <label htmlFor="city">City: </label>
  <input type="text" id="city" onChange={(ev) => setCity(ev.target.value)}>
      </input>
      <br/>

  <label htmlFor="wish"></label>Wish! <label/>
  <input type="text" id="wish" onChange={(ev) => setWish(ev.target.value)}>
    </input>
    <br/>

  <input type="submit"></input>

</form>
    
</div>

  )
}

export default Form;