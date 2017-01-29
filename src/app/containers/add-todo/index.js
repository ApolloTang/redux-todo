import React from 'react';
import {connect} from 'react-redux';

import {addTodo as Action_addTodo} from 'app/actions';
import {mapStoreToProps, mapDispatchToProps} from './selector';


const AddTodo = ({dispatch_addTodo}) => {
// const AddTodo = (...args) => {
    // console.log(args)

    let input;
    return (
        <div>
            <form onSubmit={
                e=>{
                    e.preventDefault();
                    dispatch_addTodo('asdfdf');
                }} >
                <input onChange={e=>{console.log('inputChange')}} />
                <button type="submit"> Add Todo </button>
            </form>
        </div>
    );
};


export default connect(mapStoreToProps, mapDispatchToProps)(AddTodo);
