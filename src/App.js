
import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [data, setData] = useState({})

  async function fetchData() {
    const getData = await fetch ("https://api.thecatapi.com/v1/images/search")
    const getJson = await getData.json()
    console.log(getJson)
    setData(getJson[0].url)
  }

  useEffect(() => {
    fetchData()
  } , [])

  return (
    <div className="App">
      <img className="image" src={data}></img>
    </div>
  );
}

export default App;
