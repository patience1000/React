import { useContext } from "react";
import { createContext, useState } from "react";

const UserContext = createContext(undefined); 

export const UserProvider = ({children}) =>{
    const [user] = useState({
        name: 'John',
        email: 'john@gmail.com',
        dob: '02/02/2001'
    })
    return <UserContext.Provider value={{user}}></UserContext.Provider> 
};

export const useUser = () => useContext(UserContext);