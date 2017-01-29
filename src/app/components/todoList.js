import React from 'react';

import TodoItem from './todoItem';

const TodoList = ({todos}) => {
    return (<ul>
        {
            todos.map((todo, i)=>{
                return (<TodoItem key={i} todo={todo.text} />);
            })
        }
    </ul>);
}


export default  TodoList;
