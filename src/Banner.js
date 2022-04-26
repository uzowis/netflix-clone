import { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';

const Banner = ({fetchUrl}) => {

    function truncate (str, n){
        return str.length > n ? str.substr(0, n-1) + "..." : str;
    }
    const [movie, setMovie] = useState([]);
   
    
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            console.log(request);
            return request;
        }fetchData();

    }, [fetchUrl]);

    

    return ( 
        <div className="banner" 
            style={{
                backgroundSize: 'cover',
                backgroundImage : `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner_contents">
                 {/* Movie Title */}
                <h1 className="movie_title">{movie?.name || movie?.original_name || movie?.title}</h1>
                
                {/* Two Buttons, Play and My List */}
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button> 
                    <button className='banner_button'>My List</button>
                </div>
            
                {/* Movie Overview */}
                <p className='description'>{truncate(`${movie?.overview}`, 150)}</p>
                {/* <div className="faded_bottom"></div> */}
               
            </div>
            
           
        </div>
        
     );
}
 
export default Banner;