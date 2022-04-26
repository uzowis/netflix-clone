import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from './axios';
import  "./Row.css";


const Row = ({title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    // Youtube trailer properties
    const opts ={
        height: '400px',
        width : '100%',
        playerVars :{
            autoplay: 1,
        }
    }

    function loadTrailer(movie){
        if(trailerUrl){
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.name || movie?.title  || movie?.original_name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            }).catch(err =>{console.log(err)})
        }
    }

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.table(movies);
            return request;
        } fetchData();
    }, [fetchUrl]);

    return ( 
        
        <div className="row">
            <h3>{title}</h3>
            {/* Create a row for the poster */}
            
            
                <div className="row_posters">
                    {
                        movies.map(movie =>(
                            <img 
                            key={movie.id}
                            onClick={() =>{loadTrailer(movie)}}
                            className={`row_poster ${isLargeRow && 'poster_row'}`} 
                            src={`${imgBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie?.title || movie?.name} />
                        ))
                    }
            
                </div>
            
            
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
        

     );
}
 
export default Row;