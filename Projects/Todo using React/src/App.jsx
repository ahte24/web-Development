/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [showFinished, setShowFinished] = useState(false);

	useEffect(() => {
		let todoString = localStorage.getItem("todos");
		if (todoString) {
			let todos = JSON.parse(localStorage.getItem("todos"));
			setTodos(todos);
		}
	}, []);

	const toggleFinished = (e) => {
		setShowFinished(!showFinished);
	};

	const saveToLS = (params) => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const handleAdd = () => {
		setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
		setTodo("");
		saveToLS();
	};

	const handleEdit = (e, id) => {
		const isConfirmed = window.confirm(
			"Are you sure you want to Edit this item?"
		);
		if (isConfirmed) {
			let Todo = todos.filter((i) => i.id === id);
			setTodo(Todo[0].todo);
			let newTodos = todos.filter((item) => {
				return item.id !== id;
			});
			setTodos(newTodos);
			saveToLS();
		}
	};

	const handleDelete = (e, id) => {
		const isConfirmed = window.confirm(
			"Are you sure you want to delete this item?"
		);
		if (isConfirmed) {
			let newTodos = todos.filter((item) => {
				return item.id !== id;
			});
			setTodos(newTodos);
			saveToLS();
		}
	};

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleCheckbox = (e) => {
		let id = e.target.name;
		let index = todos.findIndex((item) => {
			return item.id === id;
		});
		let newTodos = [...todos];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;
		setTodos(newTodos);
		saveToLS();
	};

	return (
		<>
			<Navbar />
			<div className="transition-all mx-auto my-5 p-5 rounded-xl bg-purple-100 min-h-[87vh] lg:w-2/5 flex flex-col gap-5 ">
				<h1 className="text-center font-bold text-xl">
					iTask - Manage your todos at one place
				</h1>
				<div className="addTodo flex flex-col gap-4">
					<h1 className="font-bold text-lg">Add a Todo</h1>
					<div className="add flex gap-4 h-10">
						<input
							type="text"
							onChange={handleChange}
							value={todo}
							className="w-10/12 rounded-lg p-2
						"
						/>
						<button
							onClick={handleAdd}
							disabled={todo.length <= 3}
							className="rounded-lg py-1 px-5 disabled:bg-purple-300 bg-purple-600 transition-all hover:bg-purple-800 font-bold text-white"
						>
							Save
						</button>
					</div>
				</div>
				<div className="showFinished flex gap-4">
					<input
						type="checkbox"
						name="Finished"
						id=""
						onChange={toggleFinished}
						checked={showFinished}
					/>
					<label htmlFor="checkbox" className="text-sm">
						{" "}
						Show Finished
					</label>
				</div>
				<div className="Margin border-b border-gray-500 w-4/5 mx-auto"></div>

				<div className="displayTodo flex flex-col gap-4">
					<h1 className="font-bold text-lg">Your Todos</h1>
					<div className="todos flex flex-col gap-4 ">
						{todos.length == 0 && (
							<div className="mx-4">No Todos to Display</div>
						)}
						{todos.map((item) => {
							return (
								(showFinished || !item.isCompleted) && (
									<div
										key={item.id}
										className="todo transition-all flex justify-between  p-2 rounded-lg bg-purple-200"
									>
										<div className="flex gap-4">
											<input
												onChange={handleCheckbox}
												type="checkbox"
												name={item.id}
												checked={item.isCompleted}
												id=""
											/>
											<div
												className={
													item.isCompleted
														? "line-through"
														: "max-w-96 text-wrap"
												}
											>
												{item.todo}
											</div>
										</div>
										<div className="buttons flex gap-3 items-center">
											<button
												onClick={(e) => {
													handleEdit(e, item.id);
												}}
												className="bg-purple-600 transition-all hover:bg-purple-800 text-white p-2 rounded-lg font-bold text-sm"
											>
												<FaEdit />
											</button>
											<button
												onClick={(e) => {
													handleDelete(e, item.id);
												}}
												className="bg-purple-600 transition-all hover:bg-purple-800 text-white  p-2 rounded-lg font-bold text-sm"
											>
												<MdDelete />
											</button>
										</div>
									</div>
								)
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
