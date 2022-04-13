import "./App.css";
import Randomize from "./Randomize";

export default function App() {
  return (
    <div className="App">
     <div className="container d-flex flex-column min-vh-100">
    <main className="App-main">
      <Randomize />
    </main>
    <footer className='mt-auto'>
    Romina Cristaldo
        <a
          href="https://github.com/RoCristal/Horror-movies"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>

    </footer>



      
     </div>
    </div>
  );
}
