import React, { ChangeEvent, MouseEventHandler, useState } from "react";

type TodoItemPropsType = {
    todoTitle?: string;
    id: string;
    complited: boolean;
    deleteEl?: any;
    isChecked: (e: ChangeEvent<HTMLInputElement> , id: string) => void ;
};

export const TodoItem = (props: TodoItemPropsType) => {
    const removeElement = () => {
        props.deleteEl(props.id);
    }

    const setChecked = (e: ChangeEvent<HTMLInputElement>) => {
        props.isChecked(e, props.id);
    }

    return (
        <div className="todo-item">
            <h3 className={"todo-item-title"}>{props.todoTitle}</h3>

            <div>
                <a  className={"btn btn-edit"} href="#">
                    Edit
                </a>
                <a onClick={removeElement} className={"btn btn-delete"} href="#">
                    Delete
                </a>
                <input
                    checked={props.complited}
                    onChange={setChecked}
                    className={"btn-checkbox"}
                    type="checkbox"
                />
            </div>
        </div>
    );
};
