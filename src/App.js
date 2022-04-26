import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      
       {/* Navbar */}
       <Navbar />
       {/* Banner */}
       <Banner fetchUrl={requests.fetchNetflixOriginals}/>

       <Row 
       isLargeRow
       title="Trending Movies" 
       fetchUrl={requests.fetchTrendingMovies}/>
       
       <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} m={''}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Row title="Horrow Movies" fetchUrl={requests.fetchHorrowMovies} />
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={requests.fectDocumentaries} />
    </div>
  );
}

export default App;
