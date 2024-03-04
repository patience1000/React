const LoggedInUser = ()  =>{
    return(
        <p>Hello</p>
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
    return(
      <div>
        <h2> What is Lorem Ispun?</h2>

        <p> lorem Ispun ame fhgjtjthrgregrhyjyftgy6u5j45g5jy65htthjgkuyjregr</p>
        <p>Written by</p>
      </div>
    );
};

export default Page;