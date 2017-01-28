const initialState = 'SHOW_ALL';

const visibilitySetting = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': {
            return action.filter
            break;
        }
        default: {
            return state;
        }
    }
}

export default visibilitySetting;
