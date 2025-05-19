import logo from "./logo.svg";
import "./App.css";
import Question1 from "./Components/question1";
import Question2 from "./Components/question2";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <div>
        <h3>Question 1</h3>
        <Question1 />
      </div>
      <div>
        <h3>Question 2</h3>
        <Question2 />
      </div>
    </>
  );
}

export default App;
