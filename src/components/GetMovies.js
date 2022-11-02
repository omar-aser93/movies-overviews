/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState , useEffect } from 'react';
import Movie from './Movie' ;

const GetMovies =() =>{ 

  //data from the API website
const getApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_video=true&api_key=8b3086d8cc10f509a461783c237dd937&page=1'  ;
const searchApi = `https://api.themoviedb.org/3/search/movie?&api_key=8b3086d8cc10f509a461783c237dd937&page=1&query=`  ;
  
  const [movies,setMovies]  = useState([]) ;       //store api data
  const [search,setSearch]  = useState('') ;       //store search value

  useEffect(() => {                         //render the api fetch function
    movies_fetching();  }, []) ;

    const movies_fetching= ()=>{              //fetch api using fetch & promises
         fetch(getApi).then(res => res.json()).then(data=>{setMovies(data.results) }) ;  }   

   const handleSubmit =(e) =>{              //function of sumbit search by fetching search api
     e.preventDefault();
     fetch(searchApi+search).then(res => res.json()).then(data=>{setMovies(data.results);  }) ;  } 
        
  return (                           //search form and pass api data as props
    <div className="GetMovies">
      <form  onSubmit={handleSubmit}>
     <input type="search" placeholder="search movies" value={search} onChange={(e)=>setSearch(e.target.value)} required/>
     <button type="submit" >Search</button>
      </form>
      <h2>Trending Movies / Search reasults : </h2>
     <div className='moviesList'> {movies?.map(movie => <Movie key={movie.id} {...movie}/>) }</div> 
    </div>
  );
}

export default GetMovies;
