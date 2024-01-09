import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Welcome from './components/welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar name="Patience" heroName="Wonder woman">
          <p>No one knows</p>
        </Navbar>
        <Navbar name="Pat"/>
        <Navbar name="Patie"/>
        <Sidenav/>
        <Welcome/>
        <Hello/>

      </div>
       
    </div>
  );
}
export default App;
