import React from 'react';

type TodoItemPropsType = {
    todoTitle?: string;
    key: number;
}

export const TodoItem = (props: TodoItemPropsType) => {
    return (
        <div className={"todo-item completed"}>
            <h3 className={"todo-item-title"}>{props.todoTitle}</h3>

            <div>
                <a className={"btn btn-edit"} href="#">Edit</a>
                <a className={"btn btn-delete"} href="#">Delete</a>
                <input className={"btn-checkbox"} type="checkbox"/>
            </div>
        </div>
    );
};