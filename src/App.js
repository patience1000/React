import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import  Impression from './components/Impression';
import Binding  from './components/Binding';
import PComponent from './Pcomponent';

function App() {
  return (
    <div className="App">
      <div className="nav">
        {/* <Navbar name="Pmishekwo" heroName="Wonder woman"/>
        <Navbar name="Pat"/>
        <Navbar name="Patie"/>
        
        <Welcome name="Pmi" heroName="Wonder woman"/>
        <Hello/> 
        <Message name="Patience" heroName="Wonder woman"/> 
        <Counter/>*/}
        {/* <Sidenav/>
        <Impression/>
        <Binding/> */}
        <PComponent/>
        
      </div>   
    </div>
  );
}
export default App;
