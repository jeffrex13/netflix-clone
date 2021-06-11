import "./App.css";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Row from "./component/Row";
import requests from "./request";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <div className="madeBy">
        <p>Clone recreated by: Jeffrey Cureg</p>
      </div>
    </div>
  );
}

export default App;
