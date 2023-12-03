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

    // Remove element func.
    const removeElement = () => {
        props.deleteEl(props.id);
    };

    // Checked input func.
    const setChecked = (e: ChangeEvent<HTMLInputElement>) => {
        props.isChecked(e, props.id);
    };

    const editTodoItem = () => {
        props.editTodo(props.id);
    };

    return props.editedItem ? (
        <div  className={"todo-item todo-item-edited"}>
            <form className="edited-form" action="#">
                <input type="text" placeholder={props.todoTitle} value={updatedTitle} onChange={(e) => {
                    e.preventDefault();

                    console.log(e.currentTarget.value);
                    setUpdatedTitle(e.currentTarget.value);
                }} />
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
