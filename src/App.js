import React, {useState} from 'react';
import logo from './logo.svg';
import './css/App.css';
import SearchResults from './components/SearchResults';


const jsMockup = [{id: 1, name:"Popotito", artist: "Jose y los magnificos", album: "Popotito love" }, {id: 2, name:"Freaks go home",artist: "Darkside", album: "Soundscape"}];


function App() {
  const [searchResults, setSearchResults] = useState([jsMockup]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jammming App jj
        </p>

        <SearchResults tracklist={searchResults} />


      </header>

  
    </div>
  );
}

export default App;
