import { useState } from "react";

const EditToDoForm = ({ editTask, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		editTask(value, task.id);
	};

	return (
		<form className="ToDoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				placeholder="Update Task"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="todo-submit">
				Update Task
			</button>
		</form>
	);
};
export default EditToDoForm;
