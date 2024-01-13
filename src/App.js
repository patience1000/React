import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar name="Patience" heroName="Wonder woman"/>
        <Navbar name="Pat"/>
        <Navbar name="Patie"/>
        <Sidenav/>
        <Welcome/>
        <Hello/> 
        <Message name="Patience" heroName="Wonder woman"/> 
        <Counter/>
      </div>
       
    </div>
  );
}
export default App;
