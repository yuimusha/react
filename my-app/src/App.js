import './App.css';
import { useEffect, useState } from "react";
import itemData from "./item-data.json";
import Item from "./Item.js";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {
  
  const [data, setData] = useState(itemData);
  const [num, setNum] = useState(0);
  const [song, setMySong] = useState([]);

  const loadData = () => {
    setData(itemData);
  }
  useEffect(() => {loadData();}, [])

  const filterDataGenre = (genre) => {
    setData(data.filter(song => song.genre == genre));
  }

  const filterDataArtist = (artist) => {
    setData(data.filter(song => song.artist == artist));
  }

  const sortByLength = () => {
    const sorted = [...data].sort((a, b) => (a['length-calc'] > b['length-calc'] ? 1 : -1));
    setData(sorted);
  }

  const clearFilters = () => {
    setData(itemData);
  }

  const buildElements = () => {
    const jsxlist = data.map((item) => (
      <Item item={item} add={addToList}/>
    ))
    return jsxlist;
  }

  const addToList = (name) => {
    setNum(num+1);
    setMySong([...song, name])
  }

  const songCount = () => {
    if (song.length == 0){
      return <p>No song in My List</p>
    }
    if (song.length == 1) {
      return <p>1 song in My List</p>
    }
    if (song.lenth != 0 && song.length != 1){
      return <p>{song.length} songs in My List</p>
    }
  }

  const showMyList = () => {
    const jsxlist = song.map((item, index) => (
      <p key={index} >{item}</p>
    ))
    return jsxlist;
  }

  const theme = createTheme({
    palette: {
        primary: {
          main: '#7CC6FE',
        },
        secondary : {
          main: '#C884A6',
        }
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
      </header>
      <div className="main">
        <div className="main-section">
          <div className="filter-section">
            <h4>Filter songs by genre:</h4>
            <div className="filter-buttons">
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" onClick={() => filterDataGenre("Pop")} size="small">Pop</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataGenre("Jazz")} size="small">Jazz</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataGenre("Classical")} size="small">Classical</Button>
              </ThemeProvider>
            </div>
            <h4>Filter songs by artist:</h4>
            <div className="filter-buttons">
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("James Arthur")}>James Arthur</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Taylor Swift")}>Taylor Swift</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Olivia Rodrigo")}>Olivia Rodrigo</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Pablo de Sarasate")}>Pablo de Sarasate</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Billie Holiday")}>Billie Holiday</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Julian Lage")}>Julian Lage</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Melissa Aldana")}>Melissa Aldana</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Niccolo Paganini")}>Niccolo Paganini</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Sergei Rachmaninoff")}>Sergei Rachmaninoff</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Ed Sheeran")}>Ed Sheeran</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Art Farmer")}>Art Farmer</Button>
                <Button variant="contained" color="primary" onClick={() => filterDataArtist("Pyotr Ilyich Tchaikovsky")}>Pyotr Ilyich Tchaikovsky</Button>
              </ThemeProvider>
            </div>
            <ThemeProvider theme={theme}>
              <h4>Sort songs by: <Button variant="contained" color="primary" onClick={() => sortByLength()}>Length</Button></h4>
            </ThemeProvider>
            <div className="clear-section">
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="secondary" onClick={() => clearFilters()}>Clear Filters and Unsort</Button>
              </ThemeProvider>
            </div>
          </div>
          <div className="content">
            {buildElements()}
          </div>
        </div>
        <div className="aggregator">
          <h2 className="aggregator-title">My List</h2>
          <div className="song-count">
            {songCount()}
          </div>
          {showMyList()}
        </div> 
      </div>
    </div>
  );
}

export default App;
