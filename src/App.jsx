import { useReducer, useEffect, useState } from 'react';
import { tasksReducer } from './reducers/tasksReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategoryManager from './components/CategoryManager';
import FilterSortTasks from './components/FilterSortTasks';

const initialTasks = [];
const initialCategories = [];

function App() {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks);
  const [categories, dispatchCategories] = useReducer(categoriesReducer, initialCategories);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilterChange = (categoryId) => {
    if (categoryId === '') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(task => task.categoryId === categoryId);
      setFilteredTasks(filtered);
    }
  };

  const handleSortChange = (sortCriteria) => {
    const sortedTasks = [...filteredTasks];
    if (sortCriteria === 'name') {
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === 'date') {
      sortedTasks.sort((a, b) => new Date(a.id) - new Date(b.id));
    }
    setFilteredTasks(sortedTasks);
  };

  return (
    <div className="App container mx-auto p-4">
      <TaskForm dispatch={dispatchTasks} categories={categories} />
      <FilterSortTasks
        categories={categories}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <TaskList tasks={filteredTasks} categories={categories} dispatch={dispatchTasks} />
      <CategoryManager categories={categories} dispatch={dispatchCategories} />
    </div>

  );
}

export default App;
