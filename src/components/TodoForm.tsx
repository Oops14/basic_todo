import React, {useState} from 'react';

type TodoItemPropsType = {
    addTodo?: any;
}

export const TodoForm = (props: TodoItemPropsType) => {
    const [todo, setTodo] = useState("");

    return (
        <div className={"form-wrapper"}>
            <form className={"todo-form"}>
                <input value={todo} onChange={(e) => {
                    e.preventDefault();

                    setTodo(e.target.value);

                }} type="text"/>
                <button onClick={(e) => {
                    e.preventDefault();

                    todo !== '' ? props.addTodo(todo)
                        : alert('The task cannot be empty. Please define the text to show the task');

                    setTodo('');
                }} className={"form-btn"}>Add Task
                </button>
            </form>
        </div>
    );
};