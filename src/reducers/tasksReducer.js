export const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'UPDATE_TASK':
            return state.map(task => task.id === action.payload.id ? { ...task, ...action.payload } : task);
        default:
            return state;
    }
};
