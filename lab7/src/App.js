import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Person
 from './components/Person';
function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <Person/>
    </div>
  );
}

export default App;