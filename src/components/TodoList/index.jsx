import TodoItem from "../TodoItem";
import { useFilter } from "../../contexts/Filter";
import { useTodo } from "../../contexts/Todo";

function TodoList() {

	const { todos, setTodos } = useTodo()
    const { filteredTodos } = useFilter()



	function deleteTodo(todo) {
		let filteredTodos = todos.filter(el => el !== todo);
		setTodos(filteredTodos);
	}

	function completeTodo(todo) {
		setTodos(todos.map((item) => {
			if(item === todo) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, i) => <TodoItem todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={i} />)}
			</ul>
		</div>
	)
}

export default TodoList;