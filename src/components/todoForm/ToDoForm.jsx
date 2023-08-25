import "./todoForm.css";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(value);
		setValue("");
	};

	return (
		<form className="todo__Form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				placeholder="Enter your Task"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="todo-submit">
				Add Task
			</button>
		</form>
	);
};
export default TodoForm;
