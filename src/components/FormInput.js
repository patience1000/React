import React, { useState } from "react";


function FormInput(){
    const [name, setName] = useState();
    const [score, setScore] = useState(10);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setName("");
        alert('Form submitted successfully')
    }
    const actionSubmit = (e) =>{
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <=10){
            alert("Please state why the service was poor");
            return
        }
        alert('Thanks for your feedback')
        setComment("");
        setScore(10);
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
            <form onSubmit={actionSubmit}>
                <fieldset>
                    <div>
                        <h2>Feed Back Form</h2>
                        <label>
                            Score:{score} *
                        </label>
                        <input type="range" max="10" min="0" value={score} onChange={ e => setScore(e.target.value)} />
                        
                    </div>
                    <div>
                        <label>
                            Comment:
                        </label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                    <button type="submit" >Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default FormInput;