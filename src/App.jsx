import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Item List Container!'/>
    </div>
  );
}


export default App;
