import './App.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

function App({saludo = 'Hola te pico la cola'}) {
  return (
    <div className="App">
     <CounterApp 
       value = { 0 }
     />
     <PrimeraApp
      saludo = { 'Hola te pico la cola' }
     />
    </div>
  );
}

export default App;
