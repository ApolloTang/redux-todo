
const initialState = {
    filter:'SHOW_ALL'
};

const todoListControl = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': {
            return {
                filter:action.filterType
            }
            break;
        }
        default: {
            return state;
        }
    }
}

export default todoListControl;
