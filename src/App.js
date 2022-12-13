
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import Connexion from './components/Connexion';

function App() {
  return (
    <div className="App">
      <Headers />
      <Home />
      <Connexion />
    </div> 
  );
}

export default App;
