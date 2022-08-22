import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

const hiButton = () => {
  return (<button onClick={() => {alert("hi!")}}>Hola puto!</button>
  )
}



export default App;
