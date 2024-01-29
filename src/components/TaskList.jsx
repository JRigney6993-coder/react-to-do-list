import React from 'react';

const TaskList = ({ tasks, categories, dispatch }) => {
    const findCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown Category';
    };
    

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    {console.log(task.categoryId)}
                    <p>Category: {findCategoryName(task.categoryId)}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
