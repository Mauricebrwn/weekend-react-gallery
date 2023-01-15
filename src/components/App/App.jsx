import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleyList/GalleryList.jsx';
import axios from 'axios';

function App() {

  const[galleryData, setGalleryData] = useState([]);

  useEffect (() => {
    getGalleryList();
  },[]);

  const getGalleryList = () => {
    axios
    .get('gallery')
    .then((response) => {
      setGalleryData(response.data);
    })
    .catch((error) => {
      console.log(error, 'something broke in axios.get')
    });
  };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>The most important people in my life!</h2>
        <GalleryList galleryData={galleryData} getGalleryList= {getGalleryList} />
      </div>
    );
}

export default App;
