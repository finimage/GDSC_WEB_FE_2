import './ToDoItem.css';

const ToDoItem = ({item, removeToDoItem}) => {
    return (
        <li>
            {item}
            <button onClick={removeToDoItem}>Remove</button>
        </li>
    );
};

export default ToDoItem;