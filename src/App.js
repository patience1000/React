import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Welcome from './components/welcome';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar name="Patience"/>
        <Sidenav/>
        <Welcome/>
      </div>
       
    </div>
  );
}

export default App;
