import React, { useState } from 'react';
import {Modal, Box}from '@mui/material';

const Movie =({title ,poster_path ,overview ,vote_average ,release_date ,id }) =>{ 

  const imageApi =   'https://image.tmdb.org/t/p/w1280' ;      //get the poster using poster_path (this API docs)
  
  const [videos, setVideos] = useState(null);        //store movie's videos  
  //fetch videos endpoint using movie id
  const trailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8b3086d8cc10f509a461783c237dd937` ;  
  const getTrailer = () => {                         
    fetch(trailer).then(res => res.json()).then(data=>{setVideos(data.results) })}  ; 
    
  //Modal styling
  const style = { position: 'absolute', top: '50%',left: '50%', transform: 'translate(-50%, -50%)',
                width: 600, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };   
  const [open, setOpen] = useState(false); //store if modal is open or closed    
  
  //show the movie title, poster, overview, vote_average for each item from API & show modal onclick
  return (                   
    <div className="Movie">

     <div className='contain' onClick={() => {setOpen(true); getTrailer(); }}> 
        <img src={imageApi+poster_path}  alt='poster' />
        <div className='overview'>{overview}</div>
     </div>
     <h1>{title}</h1>
    <div className='rate'><span>{vote_average.toFixed(1)}</span>  <p>{release_date}</p></div> 

      <Modal open={open} onClose={() => setOpen(false)}  >
        <Box sx={style}>        
          <div className='modalData'>
            {/* check the movie videos & map through it , if official trailer return it in iframe youtube */}  
            { videos && videos.map(video=>{
              if (video.name === "Official Trailer"){               
                return( <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="trailer" key={video.key} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  )  }   
                }) } 

            <br />
            <div style={{display:'flex', background:'#E9ECEF' , borderRadius:'7px'}}>
              <img src={imageApi+poster_path} height="160" alt='poster' title='poster' />              
             <div className='modalText'>  {overview} </div>
            </div>
            
          </div>
        </Box>
      </Modal>

    </div>
  );
}

export default Movie;
