import { useState, useEffect } from 'react';

const CategoryForm = ({ dispatch, category = {}, cancelEdit }) => {
    const [name, setName] = useState(category.name || '');

    useEffect(() => {
        if (category) setName(category.name || '');
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category.id) {
            dispatch({ type: 'UPDATE_CATEGORY', payload: { ...category, name } });
        } else {
            dispatch({ type: 'ADD_CATEGORY', payload: { id: Date.now(), name } });
        }
        setName('');
        cancelEdit && cancelEdit();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                required
                className="border p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-300"
            />
            <div className="flex space-x-2">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    {category.id ? 'Update' : 'Add'} Category
                </button>
                {category.id &&
                    <button
                        onClick={cancelEdit}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Cancel
                    </button>
                }
            </div>
        </form>
    );
};

export default CategoryForm;
