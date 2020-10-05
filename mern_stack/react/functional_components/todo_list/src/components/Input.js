import React from 'react';

const Input = props => {

    const { todoList, setTodoList } = props;
    let task = {
       title: "",
       isDone: false, 
    };
    const onChange = event => {
        task.title = event.target.value;
    };

    const onClick = event => {
        setTodoList([...todoList, task]);
        event.target.value = "";
        task = "";
    };

    return (
        <div>
            <input onChange={onChange} type="text" name="task" />
            <button onClick={onClick} className="button">Add</button>
        </div>
    );
};

export default Input;