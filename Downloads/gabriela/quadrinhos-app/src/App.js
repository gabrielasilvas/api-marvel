import './App.css';
import ListagemComics from './ListagemComics/ListagemComics';

function App() {
  return (
    <div className="App">
      <div data-testid="app-body" className="App-body"> 
          <ListagemComics />
      </div>
    </div>
  );
}

export default App;
