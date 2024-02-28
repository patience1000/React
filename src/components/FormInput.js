import React from "react";

function FormInput(){
    return(
        <div>
            <form>
                <fieldset>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input type="text" placeholder="Name" name="name"/>
                    </div>
                       <button type="submit" >Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default FormInput;