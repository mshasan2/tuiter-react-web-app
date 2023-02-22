import TodoItem from "./todo-item";
import todos from "./todos.js";
const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map((item, i) => {
                        return(<TodoItem key = {i} todo = {item}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;

