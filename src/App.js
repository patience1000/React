import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar name="Patience"/>
        <Sidenav/>
      </div>
       
    </div>
  );
}

export default App;
