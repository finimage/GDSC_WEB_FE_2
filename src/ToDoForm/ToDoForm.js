import './ToDoForm.css'
import { useState } from 'react'

const ToDoForm = () => {
    const [inputValue, setInputValue] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            addToDoItem(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
};

export default ToDoForm