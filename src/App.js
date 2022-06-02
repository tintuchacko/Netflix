//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,genre,genre_movies} from './urls'
import Axios from './Axios'



function App() {
  const [genres, setGenres] = useState([])
  useEffect(() => {
    Axios.get(genre).then(response=>{
      console.log(response.data.genres)
      setGenres(response.data.genres)
    })
  }, [])
  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals" url={originals}/>
      {/* <RowPost title="Action Movies" isSmall url={action}/> */}

      {
        genres.map((obj)=>{
          //console.log(obj.name)
          return(
           <RowPost title={obj.name} isSmall url={`${genre_movies+obj.id}`}/>
          )
        })
      }


    </div>
  );
}

export default App;
