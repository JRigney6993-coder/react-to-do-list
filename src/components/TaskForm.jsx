import { useState } from 'react';

const TaskForm = ({ dispatch, categories, task = {} }) => {
    const [title, setTitle] = useState(task.title || '');
    const [description, setDescription] = useState(task.description || '');
    const [categoryId, setCategoryId] = useState(task.categoryId || '');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim() || !categoryId) {
            alert("Please fill in all fields correctly.");
            return;
        }

        const payload = {
            id: task.id || Date.now(),
            title,
            description,
            categoryId
        };

        if (task.id) {
            dispatch({ type: 'UPDATE_TASK', payload });
        } else {
            dispatch({ type: 'ADD_TASK', payload });
        }

        setTitle('');
        setDescription('');
        setCategoryId('');
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="border p-2 rounded"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                className="border p-2 rounded"
            />
            <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                className="border p-2 rounded"
            >
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                {task.id ? 'Update' : 'Add'} Task
            </button>
        </form>

    );
};

export default TaskForm;
