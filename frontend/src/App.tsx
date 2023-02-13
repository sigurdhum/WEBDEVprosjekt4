import React from 'react';
import { FilterList } from './components/FilterList';
import { ListView } from './components/ListView';
import { Navbar } from './components/Navbar';
import ScrollButton from './components/ScrollButtonNew';
import { SearchBar } from './components/SearchBar';
//import {ScrollButton} from './components/ScrollButton';
import './css/App.css';


function App() {

  return (
    <div className="App">
        
      <Navbar />
      <SearchBar></SearchBar>
      
      <FilterList/>
      <ListView />
      <ScrollButton />
    </div>
  );
}

export default App;
