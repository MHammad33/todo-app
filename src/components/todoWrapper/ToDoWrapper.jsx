import "./todoWrapper.css";
import { EditToDoForm, ToDo, ToDoForm } from "..";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const ToDoWrapper = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (todo) => {
		setTasks([
			...tasks,
			{
				id: uuidv4(),
				task: todo,
				completed: false,
				isEditing: false,
			},
		]);
	};

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
		console.log(tasks);
	};

	const editToDo = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, isEditing: !task.isEditing } : task
			)
		);
	};

	const editTask = (editedTask, id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, task: editedTask, isEditing: !task.isEditing }
					: task
			)
		);
	};

	return (
		<div className="todo__Wrapper">
			<h1>Get Things Done</h1>
			<ToDoForm addTask={addTask} />
			{tasks.map((task, index) => {
				return task.isEditing ? (
					<EditToDoForm key={index} editTask={editTask} task={task} />
				) : (
					<ToDo
						task={task}
						key={index}
						toggleComplete={toggleComplete}
						deleteTask={deleteTask}
						editToDo={editToDo}
					/>
				);
			})}
		</div>
	);
};
export default ToDoWrapper;
