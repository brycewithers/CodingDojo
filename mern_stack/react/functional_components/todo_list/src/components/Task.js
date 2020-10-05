import React from 'react';

const Task = props => {
    const { task, todoList, setTodoList, index } = props;
    const onClick = () => {
        setTodoList(() => {
            return todoList.filter(task => todoList.indexOf(task) !== index);
        });
    };

    const onChange = () => {
        todoList[index].isDone = !todoList[index].isDone;
        setTodoList([...todoList]);
    }

    return (
        <div>
            <h4>{task.title}</h4>
            <div>
                <label htmlFor="checkbox">Done!</label>
                <input onChange={onChange} type="checkbox" name="" checked={task.isDone} />
                <button onClick={onClick} className="button">Remove</button>
            </div>
        </div>
    );
};

export default Task;