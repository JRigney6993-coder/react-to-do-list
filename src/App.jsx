import React, { useReducer, useEffect } from 'react';
import { tasksReducer } from './reducers/tasksReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategoryManager from './components/CategoryManager';

const initialTasks = [];
const initialCategories = [];

function App() {
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks);
    const [categories, dispatchCategories] = useReducer(categoriesReducer, initialCategories);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        const storedCategories = localStorage.getItem('categories');
        if (storedTasks) dispatchTasks({ type: 'LOAD_TASKS', payload: JSON.parse(storedTasks) });
        if (storedCategories) dispatchCategories({ type: 'LOAD_CATEGORIES', payload: JSON.parse(storedCategories) });
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [tasks, categories]);

    return (
      <div className="App">
            <TaskForm dispatch={dispatchTasks} categories={categories} />
            <TaskList tasks={tasks} categories={categories} dispatch={dispatchTasks} />
            <CategoryManager categories={categories} dispatch={dispatchCategories} />
        </div>
  );
}

export default App;
