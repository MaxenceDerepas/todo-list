import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    // function for add task
    const addTask = () => {
        let newTask = [...task];
        newTask.push({ task: input, done: false });
        setTask(newTask);
        setInput("");
    };

    return (
        <main>
            <section className="addTasks">
                <input
                    type="text"
                    placeholder="new task"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <div
                    onClick={() => {
                        addTask();
                    }}
                >
                    <p>Add Task</p>
                </div>
            </section>
            <section className="tasks">
                {task.map((elem, index) => {
                    // function for delete task
                    const deleteTask = () => {
                        let newTask = [...task];
                        newTask.splice(index, 1);
                        setTask(newTask);
                    };
                    // function for task done
                    const taskDone = () => {
                        let newTask = [...task];
                        newTask[index].done = !newTask[index].done;
                        setTask(newTask);
                    };

                    return (
                        <div key={index}>
                            <input
                                type="checkbox"
                                onChange={taskDone}
                                checked={elem.done ? true : false}
                            />{" "}
                            <p
                                style={{
                                    textDecoration: elem.done
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {elem.task}
                            </p>
                            <FontAwesomeIcon
                                className="icon"
                                icon="trash"
                                onClick={deleteTask}
                            />
                        </div>
                    );
                })}
            </section>
        </main>
    );
};
export default Main;
