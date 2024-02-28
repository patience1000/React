import React, { useState } from "react";

function FormInput(){
    const [name, setName] = useState()

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
        </div>
    )
}
export default FormInput;