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
import Usergreeting from './Usergreeting';
import List from './components/List';
import CssStyle from './components/CssStyle';
import ShowAnimal from './components/ShowAnimal';
import Table from './assets/images/Table.jpg';
import Choir from './assets/images/Choir.mp4'
import Calculator from './components/Calculator'
import LearnUseRef from './components/LearnUseRef';
import FormInput from './components/FormInput';
// import Page from './components/Page';
import { UserProvider, useUser } from './UserContext';


const LoggedInUser = ()  =>{
    const {user} = useUser();
    return(
        <p>Hello <span>{user.name}</span></p>
    );
};

const Header = () =>{
    return(
        <header>
        <h2> Blog App</h2>
        <LoggedInUser/>
        </header>
        
    );
};

const Page = () =>{
   const {user} = useUser(); 
    return(
      <div>
        <h2> What is Lorem Ispun?</h2>

        <p> lorem Ispun ame fhgjtjthrgregrhyjyftgy6u5j45g5jy65htthjgkuyjregr</p>
        <p>Written by {user.name}</p>
      </div>
    );
};


function App() {
  return (
    <div>
   <Header/>
   <Page/>

      {/* <Page/> */}

      {/* <FormInput/> */}
        {/* <Navbar name="Pmishekwo" heroName="Wonder woman"/>
        <Navbar name="Pat"/>
        <Navbar name="Patie"/>
        
        <Welcome name="Pmi" heroName="Wonder woman"/>
        <Hello/> 
        <Message name="Patience" heroName="Wonder woman"/> 
        <Counter/> */}
        {/* <Sidenav/>
        <Impression/>
        <Binding/> */}
        {/* <PComponent/> */}
        {/* <Usergreeting/> */}
        <br/>
        {/* <Calculator/> */}
        {/* <List/> */}
        {/* <CssStyle/> */}
        {/* <LearnUseRef/> */}
        {/* <img 
        height={200}
        alt='Table'
        src={Table} />

        <img 
        height={200}
        alt='Table'
        src={require("./assets/images/multi.jpg")}/>
        <video src='Choir' width={350} height={200} controls /> */}
        {/* <ShowAnimal/> */}
    </div>
  );
 
}
function Root(){
  return <UserProvider><App/></UserProvider>
}
export default Root;
// export default App;
