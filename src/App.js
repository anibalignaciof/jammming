import React, {useState} from 'react';
import logo from './logo.svg';
import './css/App.css';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';


const jsMockup = [ {
  "id": 1,
  "name":"Popotito",
  "artist": "Jose y los magnificos",
  "album": "Popotito love"
},
{
  "id": 2,
  "name":"Freaks go home",
  "artist": "Darkside",
  "album": "Soundscape"
},
{
  "id": 3,
  "name":"El cigarrito",
  "artist": "Victor Jara",
  "album": "La chiquichuchi"
}, {
    "id": 3,
    "name":"El cigarrito",
    "artist": "Victor Jara",
    "album": "La chiquichuchi"
},
{
    "id": 4,
    "name":"Ifiugarabiguimi",
    "artist": "Dua Lipa",
    "album": "Best of Dua Lipa"
},
{
    "id": 5,
    "name":"Murio la Flor",
    "artist": "Los Angeles Negros",
    "album": "Very best"
},
{
    "id": 6,
    "name":"Into the Night",
    "artist": "Funated",
    "album": "Funation"
},
{
    "id": 7,
    "name":"Se me acabo la inspiracion",
    "artist": "8966",
    "album": "Termosfera"
}];


function App() {
  const [searchResults, setSearchResults] = useState(jsMockup);
  const [playList, setPlayList] = useState(jsMockup);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jammming App jj
        </p>

        <SearchResults tracklist={searchResults} />

        <Playlist name="nombre temporalw" tracklist={playList} />


      </header>

  
    </div>
  );
}

export default App;
