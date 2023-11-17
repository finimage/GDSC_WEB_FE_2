import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({toDoItems, removeToDoItem}) => {
    return (
        <ul>
        { toDoItems.map((item, index) => (
            <ToDoItem
            key={index}
            item={item}
            removeToDoItem={()=>removeToDoItem(index)}/>
        ))}
        </ul>
    );
};

export default ToDoList;