import _ from 'lodash';
import  * as Action from 'app/actions';


function getFilteredTodos(todos, visibilityFilter) {
    const todos_array = _(todos).map(v=>v).value();
    return todos_array;
}

const mapStoreToProps = (store) => {
    const filteredTodos = getFilteredTodos(store.todos, store.visibilityFilter);
    return {
        todos: filteredTodos
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        dispatch_complete(id) {
            console.log('conplete', Action)
            dispatch( Action.toggleTodo(id) );
        },
        dispatch_remove(id) {
            console.log('remove', Action)
            dispatch( Action.removeTodo(id) );
        }
    }
);


export {mapStoreToProps, mapDispatchToProps};
