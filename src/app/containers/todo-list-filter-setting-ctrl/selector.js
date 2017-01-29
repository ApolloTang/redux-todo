import _ from 'lodash';
import  * as Action from 'app/actions/todo-list-control';

const mapStoreToProps = (store, ownProps) => {
    return {
        active: ownProps.filterType === store.todoListControl.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        onClick(type) {
            dispatch( Action.setTodoListFilterType(ownProps.filterType) );
        }
    }
);

export {mapStoreToProps, mapDispatchToProps};
