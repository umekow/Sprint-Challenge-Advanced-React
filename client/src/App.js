import React from 'react';
import './App.css';
import useFetchApi from './hooks/useFetchApi'
import PlayerCard from './components/PlayerCard'



function App() {
   
  const [players, setApi] = useFetchApi('http://localhost:5000/api/players'); 

  return (
    <div className="App">
      <h1>Women's World Cup players</h1>

      <img src= 'https://cdn.vox-cdn.com/uploads/chorus_image/image/64058776/1157200431.jpg.0.jpg' alt='wwc'/>
      <div className="players">
        {
          
            players.map(
              player => {
                return(
                  <PlayerCard key={player.id} name={player.name} country={player.country} searches={player.searches} />
                )
            } 
            )
        
      }
      </div>
    </div>
  );
}

export default App;
