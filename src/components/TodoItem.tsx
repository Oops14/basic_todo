import React, { ChangeEvent, useState } from "react";

type TodoItemPropsType = {
    todoTitle?: string;
    id: string;
    complited: boolean;
    deleteEl: (id: string) => void;
    isChecked: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
    editTodo: (id: string) => void;
    editedItem: boolean;
    setEditedItem: (editedItem: boolean) => void;
    updateTodo: (id: string, newTitle: any) => void;
};

export const TodoItem = (props: TodoItemPropsType) => {
    const [updatedTitle, setUpdatedTitle] = useState('');

    // Send id to the remove func.
    const removeElement = () => {
        props.deleteEl(props.id);
    };

    // Send event and id to the checked func.
    const setChecked = (e: ChangeEvent<HTMLInputElement>) => {
        props.isChecked(e, props.id);
    };

    // Send id to the edit func.
    const editTodoItem = () => {
        props.editTodo(props.id);
    };

    const updateText = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUpdatedTitle(e.currentTarget.value);
    }

    return props.editedItem ? (
        <div  className={"todo-item todo-item-edited"}>
            <form className="edited-form" action="#">
                <input type="text" placeholder={props.todoTitle} value={updatedTitle} onChange={updateText} />
            </form>

            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => {
                    props.updateTodo(props.id, updatedTitle);
                }} className={"btn btn-edit"} href="#">
                    Update
                </a>
            </div>
        </div>
    ) : (
        <div className={props.complited ? "todo-item complited" : "todo-item"}>
            <h3 className={"todo-item-title"}>{props.todoTitle}</h3>

            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={editTodoItem} className={"btn btn-edit"} href="#">
                    Edit
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    onClick={removeElement}
                    className={"btn btn-delete"}
                    href="#"
                >
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
