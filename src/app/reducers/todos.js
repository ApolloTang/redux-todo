import _ from 'lodash';

const todos = (state = {}, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                [action.id]: {
                    text: action.text,
                    id: action.id
                }
            }

        }
        case 'REMOVE_TODO': {
            const nextState = {
                ...state
            }
            delete nextState[action.id];
            return nextState;
        }
      default:
          return state
    }
}

export default todos
