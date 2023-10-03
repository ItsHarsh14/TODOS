import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to localStorage whenever the tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (inputText.trim() !== '') {
            if (editIndex !== null) {
                // Edit existing task
                const editedTasks = [...tasks];
                editedTasks[editIndex] = inputText;
                setTasks(editedTasks);
                setEditIndex(null);
            } else {
                // Add new task
                setTasks([...tasks, inputText]);
            }
            setInputText('');
        }
    };

    const editTask = (index) => {
        setInputText(tasks[index]);
        setEditIndex(index);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        setEditIndex(null);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button onClick={addTask}>{editIndex !== null ? 'Save' : 'Add Task'}</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        edit={() => editTask(index)}
                        remove={() => removeTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
