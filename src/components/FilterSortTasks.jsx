import { useState } from 'react';

const FilterSortTasks = ({ categories, onFilterChange, onSortChange }) => {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        onFilterChange(e.target.value);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        onSortChange(e.target.value);
    };

    return (
        <div className="flex space-x-4 p-2">
            <select value={filter} onChange={handleFilterChange} className="border p-2 rounded">
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <select value={sort} onChange={handleSortChange} className="border p-2 rounded">
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </select>
        </div>

    );
};

export default FilterSortTasks;
