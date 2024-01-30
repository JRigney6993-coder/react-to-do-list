import { useState } from 'react';
import CategoryForm from './CategoryForm';

const CategoryManager = ({ categories, dispatch }) => {
    const [categoryName, setCategoryName] = useState('');
    const [editingCategory, setEditingCategory] = useState(null);

    const handleAddCategory = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_CATEGORY', payload: { id: Date.now(), name: categoryName } });
        setCategoryName('');
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category);
    };

    return (
        <div>
            {editingCategory ? (
                <CategoryForm
                    dispatch={dispatch}
                    category={editingCategory}
                    cancelEdit={() => setEditingCategory(null)}
                />
            ) : (
                <form onSubmit={handleAddCategory} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="New Category"
                        required
                        className="border p-2 rounded"
                    />
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Add Category
                    </button>
                </form>
            )}

            {categories.map(category => (
                <div key={category.id} className="border p-4 rounded shadow my-1 flex justify-between items-center">
                    <span>{category.name}</span>
                    <div>
                        <button
                            onClick={() => handleEditCategory(category)}
                            className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => dispatch({ type: 'REMOVE_CATEGORY', payload: category.id })}
                            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default CategoryManager;