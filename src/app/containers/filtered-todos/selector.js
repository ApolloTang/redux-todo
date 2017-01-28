
function getFilteredTodos(todos, visibilityFilter) {
    return [2,3,4,5];
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
