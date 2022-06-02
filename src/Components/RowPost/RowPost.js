import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import Axios from '../../Axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'


function RowPost(props) {
  const [urlId, setUrlId] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(() => {
    Axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error'+err)
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

 
  const handleMovie = (id)=>{
    console.log(id)
    Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      //console.log(response.data)
      if(response.data.results.length!==0)
      {
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>
          
            )
          }
            
            

        </div>
       { urlId && <Youtube videoId={urlId.key} opts={opts}/>  }
    </div>
  )
}

export default RowPost