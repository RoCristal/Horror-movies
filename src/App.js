import "./App.css";
import Randomize from "./Randomize";

export default function App() {
  return (
    <div className="App">
     <div className="container d-flex flex-column min-vh-100">
    <main className="App-main">
      <Randomize />
    </main>
    <div className='fixed-bottom ms-5 md'>
    Romina Cristaldo
        <a
          href="https://github.com/RoCristal/Horror-movies"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>

    </div>
    <footer className='mt-auto'>
    Open source code
    </footer >



      
     </div>
    </div>
  );
}
