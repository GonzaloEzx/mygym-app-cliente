import logo from './logo.svg';
import Componente1 from './components/Componente1/Componente1';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>¡Bienvenido a mi aplicación React!</h1>
        <Componente1 />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>
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
