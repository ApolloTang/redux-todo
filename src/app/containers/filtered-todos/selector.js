import _ from 'lodash';
import {toggleTodo as Action_toggleTodo} from 'app/actions';


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
        dispatch_toggleTodo(id) {
            dispatch( Action_toggleTodo(id) );
        }
    }
);


export {mapStoreToProps, mapDispatchToProps};
