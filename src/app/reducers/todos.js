
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
      default:
          return state
    }
}

export default todos
