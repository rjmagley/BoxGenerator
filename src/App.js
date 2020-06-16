import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './box.css';
import BoxGenerator from './BoxGenerator.js'
import BoxArea from './BoxArea.js'

function App() {
  const [colorList, setColorList] = useState([]);

  const addToList = (newColor) => {
    setColorList([...colorList, newColor]);
  }

  return (
    <div>
      <BoxGenerator addToList = {addToList}/>
      <BoxArea colorList = {colorList}/>
    </div>
  );
}

export default App;
