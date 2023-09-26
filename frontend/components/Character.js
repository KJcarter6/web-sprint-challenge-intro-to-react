import React from 'react'

function Character({Character, planet}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showPlanet, setShowPlanet] = useState(false);

  const togglePlanet = () => {
    setShowPlanet(prevShowPlanet => !prevShowPlanet);
  };
  return (
    <div className="character-card" onClick={togglePlanet}>
    <div className="character-name">{character.name}</div>
    {showPlanet && (
      <div className="character-planet">
        {planet ? `Homeworld: ${planet.name}` : 'Planet information not available'}
      </div>
    )}
  </div>
  )
}

export default Character
