import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Welcome from './components/welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar name="Patience"/>
        <Sidenav/>
        <Welcome/>
        <Hello/>
      </div>
       
    </div>
  );
}
export default App;
