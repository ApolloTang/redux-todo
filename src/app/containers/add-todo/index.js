import React from 'react';
import {connect} from 'react-redux';

import {addTodo as Action_addTodo} from 'app/actions';
import {mapStoreToProps, mapDispatchToProps} from './selector';


const AddTodo = ({dispatch_addTodo}) => {
// const AddTodo = (...args) => {
    // console.log(args)

    let inputValue;
    let inputNode;
    return (
        <div>
            <form onSubmit={
                e=>{
                    e.preventDefault();
                    dispatch_addTodo(inputValue);
                    inputNode.value = '';
                }} >
                <input
                    ref={ thisNode=>{ inputNode = thisNode }}
                    onChange={e=>{ e.preventDefault(); inputValue=e.target.value;}}
                />
                <button type="submit"> Add Todo </button>
            </form>
        </div>
    );
};


export default connect(mapStoreToProps, mapDispatchToProps)(AddTodo);
