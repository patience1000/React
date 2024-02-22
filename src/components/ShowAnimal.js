import React from 'react';
import './App.css';

function showAnimal(){
    return(
        <div>
            <div className='form'>
                <form>
                    <label> First Name
                        <input type='Text' name=''/>
                    </label>
                    <label> Last Name
                        <input type='Text'/>
                    </label>
                    <label> Email
                        <input type="text" placeholder="abc@gmail.com" name="email" required/>
                    </label>
                    <label>Password
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                    </label>
                </form>
            </div>
        </div>
    )
}
export default showAnimal;