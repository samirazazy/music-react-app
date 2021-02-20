import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((items) => {
        setElements(items);
        console.log(items);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredElements = elements.filter((robot) => {
    return robot.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !elements.length ? (
    <h1>Loading</h1>
  ) : (
    <div className=''>
      <h1 className=''>Musically</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList elements={filteredElements} />
    </div>
  );
}

export default App;
