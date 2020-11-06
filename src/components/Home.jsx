import React, {useState} from 'react';
import '../App.css';
import Instrument from './Instrument';
import List from './List';

const firstCard = {id:0, name: 'Los animales', picture:"/images/animals.jpg", sound:"/sounds/animals.mp3"};
  
  function Home({animalArray, getRandomInt}) {
    const [instrument, setInstrument] = useState(firstCard);
    const [instruments, setInstruments] = useState(animalArray);
    const [list, setList] = useState([]);
    const [max, setMax] = useState (17);
  
    const getInstrument = () => {
      const num = getRandomInt(0,max);
      setMax(max -1);
  
      const kicked = instruments[num];
      const instrumentList = [...list, kicked];
      setInstrument(kicked);
      setList(instrumentList);
      
      let filteredInstruments = instruments.filter(instrument => {
        return instrument.id !== kicked.id;
      });
      setInstruments(filteredInstruments);
    }
  
    const resetGame = () => {
      setInstrument(firstCard);
      setInstruments(animalArray);
      setList([]);
      setMax(17);
    }
  
    const showInstrument = instruments.length ? (
      <div>
        <button type="button" className="btn btn-danger" onClick={getInstrument}>Obtener uno</button>
        <Instrument instrument={instrument}/>
      </div>
    ) : (
      <div>
        <p>No quedan más Animales!</p>
        <button type="button" className="btn btn-danger" onClick={resetGame}>Volver a empezar</button>
      </div>
    );
  
    const showStartAgain = list.length ? (
      <button type="button" className="btn btn-danger" onClick={resetGame}>Volver a empezar</button>
    ) : (
      <p></p>
    );
  
    return (
      <div className="App" >
        <h1 className="Title">¡Bingo de los animales!</h1>
        {showInstrument}
        <List list={list}/>
        {showStartAgain}
      </div>
    );
  }
  
  export default Home;