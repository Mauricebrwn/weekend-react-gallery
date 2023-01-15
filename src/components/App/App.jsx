//all neccessary imports to run
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleyList/GalleryList.jsx';
import axios from 'axios';

function App() {

  const[galleryData, setGalleryData] = useState([]);
//runs code one time when mounted to the DOM 
  useEffect (() => {
    getGalleryList();
  },[]);// empty array here is the stop sign

  const getGalleryList = () => {
    axios
    //asking for the gallery data
    .get('gallery')
    .then((response) => {
      setGalleryData(response.data);
    })
    .catch((error) => {
      console.log(error, 'something broke in axios.get')
    });
  };
  //the return shown on the DOM once loaded 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Everything!</h1>
        </header>
        <h2>The most important people in my life!</h2>
        <GalleryList galleryData={galleryData} getGalleryList= {getGalleryList} />
      </div>
    );
}

export default App;
