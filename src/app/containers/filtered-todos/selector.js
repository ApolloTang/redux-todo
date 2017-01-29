import {toggleTodo as Action_toggleTodo} from 'app/actions';

function getFilteredTodos(todos, visibilityFilter) {
    return [{text:'todo 1'}, {text:'todo 2'}];
}

const mapStoreToProps = (store) => {
    const filteredTodos = getFilteredTodos(store.todos, store.visibilityFilter);
    return {
        todos: filteredTodos
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        dispatch_toggleTodo(id) {
            dispatch( Action_toggleTodo(id) );
        }
    }
);


export {mapStoreToProps, mapDispatchToProps};