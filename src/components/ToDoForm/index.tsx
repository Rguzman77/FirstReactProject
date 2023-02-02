import React , {useState} from "react";
import { v4 as uuid } from 'uuid'

export  function ToDoForm(props:any){
    
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const handleSubmit = (e:any)=>{
        e.preventDefault();

        props.onSubmit({
            id:uuid(),
            text:input
        });

        setInput("");

    }
    const handleChange = (e:any)=>{
        setInput(e.target.value)
    }
       
    return (
        <form className= "ToDoForm" action="" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input type="text" placeholder="Update your item" value={input}
                name="text" className="toDo-input edit"
                onChange={handleChange}/>
                <button className="toDo-button edit"> Update </button>
                    </>
                ) : (
                <>
                <input type="text" placeholder="Add a to do" value={input}
                name="text" className="toDo-input" onChange={handleChange} />
                <button className="toDo-button">Add something to do</button>
                </>                
                )}

        </form>
            );

}