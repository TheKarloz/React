import "./App.css"
import PrimeiroComponente from './components/PrimeiroComponente';
import SegundoComponente from './components/SegundoComponente';
import TerceiroComponente from './components/TerceiroComponente';

const App = () => {
  return (
    <div className='App'>
      <PrimeiroComponente />
      {/* Formulário de Login */}
      <TerceiroComponente />
      {/* Exercício */}
    </div>
  );
}

export default App;
