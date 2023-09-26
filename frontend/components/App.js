import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
const [planet, setPlanet] = useState("")
const [characters, setCharacters] = useState("")

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.get(urlPeople)
    .then(res =>{
      setCharacters(res.data);
    })
    .catch(err => {
      console.log('no characters found')
    });
  });

  axios.get(urlPlanets)
  .then(response => {
    setPlanets(response.data);
  })
  .catch(error => {
    console.log('Error fetching planets:', error);
  });
;

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map(character => {
        const characterPlanet = planets.find(planet => planet.id === character.homeworld);

        return (
          <Character key={character.id} character={character} planet={characterPlanet} />
        );
      })}
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
