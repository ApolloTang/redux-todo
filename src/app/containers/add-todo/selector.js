import {addTodo as Action_addTodo } from 'app/actions';

const mapStoreToProps = store=>({});

const mapDispatchToProps = dispatch => ({
    dispatch_addTodo(text) { dispatch( Action_addTodo(text) ); }
});


export {mapStoreToProps, mapDispatchToProps};
