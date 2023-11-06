import React, { useState } from "react";

type TodoItemPropsType = {
    todoTitle?: string;
    id: number;
    complited?: any;
    deleteEl?: any;
};

export const TodoItem = (props: TodoItemPropsType) => {
    const [checked, SetChecked]: any = useState(true);

    const removeElement = () => {
        props.deleteEl(props.id);
    }

    const isChecked = () => {
        if (checked) {
            SetChecked(!checked);
            props.complited.isComplited = checked;
        } else {
            SetChecked(!checked);
            props.complited.isComplited = checked;
        }
    }

    return (
        <div
            className={`${
                props.complited.isComplited
                    ? "todo-item complited"
                    : "todo-item"
            }`}
        >
            <h3 className={"todo-item-title"}>{props.todoTitle}</h3>

            <div>
                <a className={"btn btn-edit"} href="#">
                    Edit
                </a>
                <a onClick={removeElement} className={"btn btn-delete"} href="#">
                    Delete
                </a>
                <input
                    value={checked}
                    onClick={isChecked}
                    className={"btn-checkbox"}
                    type="checkbox"
                />
            </div>
        </div>
    );
};
