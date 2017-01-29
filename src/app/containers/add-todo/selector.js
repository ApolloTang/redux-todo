import {addTodo as Action_addTodo } from 'app/actions';

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
        dispatch_addTodo(text) { dispatch( Action_addTodo(text) ); }
    }
);


export {mapStoreToProps, mapDispatchToProps};
