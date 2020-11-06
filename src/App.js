import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const animalArray = [
  {id:0, name: 'Quirquincho', picture:"/images/armadillo.jpg", sound:"/sounds/armadillo.mp3"},
  {id:1, name: 'Carpincho', picture:"/images/capibara.jpg", sound:"/sounds/capibara.mp3"},
  {id:2, name: 'Gato', picture:"/images/cat.jpg", sound:"/sounds/cat.mp3"},
  {id:3, name: 'Puma', picture:"/images/cougar.jpg", sound:"/sounds/cougar.mp3"},
  {id:4, name: 'Vaca', picture:"/images/cow.jpg", sound:"/sounds/cow.mp3"},
  {id:5, name: 'Perro', picture:"/images/dog.jpg", sound:"/sounds/dog.mp3"},
  {id:6, name: 'Burro', picture:"/images/donkey.jpg", sound:"/sounds/donkey.mp3"},
  {id:7, name: 'Flamenco', picture:"/images/flamingo.jpg", sound:"/sounds/flamingo.mp3"},
  {id:8, name: 'Hamster', picture:"/images/hamster.jpg", sound:"/sounds/hamster.mp3"},
  {id:9, name: 'Caballo', picture:"/images/horse.jpg", sound:"/sounds/horse.mp3"},
  {id:10, name: 'Yaguareté', picture:"/images/jaguar.jpg", sound:"/sounds/jaguar.mp3"},
  {id:11, name: 'Loro', picture:"/images/parrot.jpg", sound:"/sounds/parrot.mp3"},
  {id:12, name: 'Pinguino', picture:"/images/penguin.jpg", sound:"/sounds/penguin.mp3"},
  {id:13, name: 'Ñandú', picture:"/images/rhea.jpg", sound:"/sounds/rhea.mp3"},
  {id:14, name: 'Gallo', picture:"/images/rooster.jpg", sound:"/sounds/rooster.mp3"},
  {id:15, name: 'Oveja', picture:"/images/sheep.jpg", sound:"/sounds/sheep.mp3"},
  {id:16, name: 'Tucán', picture:"/images/toucan.jpg", sound:"/sounds/toucan.mp3"},
  {id:17, name: 'Ballena', picture:"/images/whale.jpg", sound:"/sounds/whale.mp3"}
];

function App() {
  const [card, setCard] = useState ([]);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getAnimals = (cant) => {
    let animals = animalArray
    let animalList = []
    let aniMax = 17
    while(animalList.length<cant){
      const aniNum = getRandomInt(0,aniMax);
      aniMax--;
  
      const selectedAnimal = animals[aniNum];
      animalList.push(selectedAnimal)
      
      let filteredAnimals = animals.filter(animal => {
          return animal.id !== selectedAnimal.id;
      });
      animals=filteredAnimals
      console.log(animals, aniNum, aniMax)  
    }
    setCard(animalList);
  };

  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route
            exact path='/'
            render={()=> <Home animalArray={animalArray} getRandomInt={getRandomInt}/>}
          />
          <Route
            path='/card'
            render={()=> <Card card={card}/>}
          />
        </Switch>
        <Link to='/card'>
          <button type="button "className="btn btn-success" onClick={()=>getAnimals(9)}>Obtené un cartón aquí</button>
        </Link>
      </Router>
      <div className="infoCont">
        <h6>© Prof. Luciano Pardo</h6>
        <h6>Colegio Américo Vespucio</h6>
      </div>
    </div>
  );
}

export default App;
