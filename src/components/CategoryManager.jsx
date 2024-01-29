import { useState } from 'react';

const CategoryManager = ({ categories, dispatch }) => {
    const [categoryName, setCategoryName] = useState('');

    const handleAddCategory = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_CATEGORY', payload: { id: Date.now(), name: categoryName } });
        setCategoryName('');
    };

    return (
        <div>
            <form onSubmit={handleAddCategory}>
                <input 
                    type="text" 
                    value={categoryName} 
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="New Category"
                    required 
                />
                <button type="submit">Add Category</button>
            </form>
            <div>
                {categories.map(category => (
                    <div key={category.id}>
                        <span>{category.name}</span>
                        <button onClick={() => dispatch({ type: 'REMOVE_CATEGORY', payload: category.id })}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryManager;
