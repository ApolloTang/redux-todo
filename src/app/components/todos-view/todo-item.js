import React from 'react';

const TodoItem = ({text, handleComplete, handleRemove}) => {
    return (
        <li>
            <span onClick={handleComplete}>{text}</span>
            <span onClick={handleRemove}>[x]</span>
        </li>
    );
}

export default TodoItem;
