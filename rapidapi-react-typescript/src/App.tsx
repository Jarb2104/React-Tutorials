import "./App.css";
import logo from "./logo.svg";

interface somethingname {
  Your_Var: string;
  Anotherone: number;
}

function App() {
  let myvar: somethingname;
  const something = "0";

  myvar = {
    Your_Var: " and this",
    Anotherone: 10,
  };

  function returnMyVariable(prMyParam: string): string {
    return prMyParam + myvar.Your_Var;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx {returnMyVariable(something)}</code> and save
          to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
