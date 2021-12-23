import logo from './logo.svg';
import './App.css';
import Person from './component/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Person name="Adil" age="30" />
        </p>
        <p>
          <Person name="Shahezad" age="28" />
        </p>
      </header>
    </div>
  );
}

export default App;
