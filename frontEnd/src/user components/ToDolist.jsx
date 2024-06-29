import React, { useState } from 'react'

const ToDolist = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
  
    const handleAddTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };
  
    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
  
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>To-Do List</h1>
            <div className='flex gap-2 mb-4'>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='border p-2'
                    placeholder='Add a new task'
                />
                <button onClick={handleAddTask} className='bg-blue-500 text-white p-2'>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className='flex justify-between mb-2'>
                        {task}
                        <button
                            onClick={() => handleDeleteTask(index)}
                            className='text-red-500'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ToDolist