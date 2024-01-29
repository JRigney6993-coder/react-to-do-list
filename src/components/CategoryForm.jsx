import { useState } from 'react';

const CategoryForm = ({ dispatch, category = {} }) => {
    const [name, setName] = useState(category.name || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category.id) {
            dispatch({ type: 'UPDATE_CATEGORY', payload: { ...category, name } });
        } else {
            dispatch({ type: 'ADD_CATEGORY', payload: { id: Date.now(), name } });
        }
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                required 
            />
            <button type="submit">{category.id ? 'Update' : 'Add'} Category</button>
        </form>
    );
};

export default CategoryForm;
