export const categoriesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [...state, action.payload];
        case 'REMOVE_CATEGORY':
            return state.filter(category => category.id !== action.payload);
        case 'UPDATE_CATEGORY':
            return state.map(category => category.id === action.payload.id ? action.payload : category);
        default:
            return state;
    }
};
