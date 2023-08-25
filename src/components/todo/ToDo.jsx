import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = (props) => {
	const { task, toggleComplete, deleteTask, editToDo } = props;
	return (
		<div className="todo">
			<p
				className={`${task.completed ? "completed" : ""}`}
				onClick={() => toggleComplete(task.id)}
			>
				{task.task}
			</p>
			<div>
				<FontAwesomeIcon
					icon={faPenToSquare}
					onClick={() => editToDo(task.id)}
				/>
				<FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
			</div>
		</div>
	);
};
export default ToDo;
