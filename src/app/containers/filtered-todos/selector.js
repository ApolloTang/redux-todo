import _ from 'lodash';
import  * as Action from 'app/actions/todos';


function getFilteredTodos(todos, todoListControl) {
    const todos_array = _(todos)
        .map(todo=>todo)
        .filter( todo=>{
            const filter = todoListControl.filter;
            switch (filter) {
                case 'SHOW_ALL':
                    return true;
                    break;
                case 'SHOW_COMPLETED':
                    return todo.complete
                    break;
                case 'SHOW_ACTIVE':
                    return !todo.complete
                    break;
            }
        }).value();
    return todos_array;
}

const mapStoreToProps = (store) => {
    const filteredTodos = getFilteredTodos(store.todos, store.todoListControl);
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
