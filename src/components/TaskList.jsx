import React from 'react';

const TaskList = ({ tasks, categories, dispatch }) => {
    const findCategoryName = (categoryId) => {
        let category = null;

        categories.forEach(c => {
            if (c.id == categoryId) {
                category = c;
            }
        });

        return category.name;
    };


    return (
        <div>
            {tasks.map(task => (
                <div key={task.id} className="border p-4 rounded shadow mb-4">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-700">{task.description}</p>
                    <p className="text-sm text-gray-500">Category: {findCategoryName(task.categoryId)}</p>
                    <button
                        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>

    );
};

export default TaskList;
