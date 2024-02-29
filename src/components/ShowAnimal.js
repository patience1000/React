import React from 'react';
// import './App.css';

function showAnimal(){

    const dets = document.getElementById('details')
    const btn = document.getElementById('btn1')
    const txt = document.getElementById('text')
    return(
        <div>
            <div className='form' id='details'>
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
                <button id = 'btn1'>Click me</button>
                <p id='text' ></p>
            </div>



        </div>
    )
}
export default showAnimal;