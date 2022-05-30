import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../Constants/Constants'
import Axios from '../../Axios'
import './Banner.css'


function Banner() {
  //const [movie, setMovie] = useState(second)
  useEffect(() => {
    Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
    })
  }, [])
  
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'> 
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>
            Lorem Ipsum doesn’t exist because people think the content is meaningless window dressing, only there to be decorated by designers who can’t be bothered to read.
            </h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner