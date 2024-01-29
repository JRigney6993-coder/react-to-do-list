import { useState } from 'react';

const TaskForm = ({ dispatch, categories, task = {} }) => {
    const [title, setTitle] = useState(task.title || '');
    const [description, setDescription] = useState(task.description || '');
    const [categoryId, setCategoryId] = useState(task.categoryId || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { 
            id: task.id || Date.now(), 
            title, 
            description,
            categoryId: categoryId || ''
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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required 
            />
            <select 
                value={categoryId} 
                onChange={(e) => setCategoryId(e.target.value)}
                required
            >
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type="submit">{task.id ? 'Update' : 'Add'} Task</button>
        </form>
    );
};

export default TaskForm;
