import React, { useState } from "react";


function FormInput(){
    const [name, setName] = useState();
    const [score, setScore] = useState(10);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setName("");
        alert('Form submitted successfully')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input type="text" placeholder="Name" name="name" id="name"
                        value={name} onChange={e => setName(e.target.value) }/>
                    </div>
                       <button disabled={!name} type="submit" >Submit</button>
                </fieldset>
            </form>
            <br/>
            <form >
                <fieldset>
                    <div>
                        <h2>Feed Back Form</h2>
                        <label>
                            Score:{score} *
                        </label>
                        <input type="range" max="10" min="0" value={score} onChange={ e => setScore(e.target.value)} />
                        
                    </div>
                    <div className="comment">
                        <label>
                            Comment:
                        </label>
                    </div>
                    <button type="submit" >Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default FormInput;