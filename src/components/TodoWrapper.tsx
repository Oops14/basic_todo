import React, { ChangeEvent, useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

type TodoItemType = {
    id: string;
    task: string;
    isComplited: boolean;
    isEdited: boolean;
};

export const TodoWrapper = () => {
    const [todoItem, setTodoItem] = useState<Array<TodoItemType>>([
        { id: uuidv4(), task: "task 1", isComplited: false, isEdited: false },
        { id: uuidv4(), task: "task 2", isComplited: false, isEdited: false },
    ]);

    const [editedItem, setEditedItem] = useState<boolean>(true);

    useEffect(() => {
        let localTodoItems = localStorage.getItem("add_todo");

        if (localTodoItems) {
            let newValue = JSON.parse(localTodoItems);
            setTodoItem(newValue);
        }
    }, []);

    // Add todo item to the list.
    const addTodo = (todo: string) => {
        const newTodoItem = [
            ...todoItem,
            { id: uuidv4(), task: todo, isComplited: false, isEdited: false },
        ];

        setTodoItem(newTodoItem);
        localStorage.setItem("add_todo", JSON.stringify(newTodoItem));
    };

    // Remove todo item.
    const removeElement = (id: string) => {
        let filteredItem = todoItem.filter(
            (todo: TodoItemType) => todo.id !== id
        );
        setTodoItem(filteredItem);
        localStorage.setItem("add_todo", JSON.stringify(filteredItem));
    };

    // Set input as done.
    const isChecked = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        let check = e.currentTarget.checked;
        let checkedTodo = todoItem.find((item) => item.id === id);

        if (checkedTodo) {
            checkedTodo.isComplited = check;
            setTodoItem([...todoItem]);
        }
    };

    // Edit func.
    const editTodo = (id: string) => {
        let edited = todoItem.map((item) =>
            item.id === id ? { ...item, isEdited: editedItem } : item
        );
        setTodoItem(edited);
    };

    // Update todo after editing.
    const updateTodo = (id: string, newTitle: any) => {
        let updated = todoItem.map((item) =>
            item.id === id
                ? { ...item, task: newTitle, isEdited: !editedItem }
                : item
        );
        setTodoItem(updated);
    };

    return (
        <div className={"todo-wrapper"}>
            <TodoForm addTodo={addTodo} />

            {todoItem.map((item) => {
                return (
                    <TodoItem
                        todoTitle={item.task}
                        key={item.id}
                        id={item.id}
                        complited={item.isComplited}
                        deleteEl={removeElement}
                        isChecked={isChecked}
                        editTodo={editTodo}
                        editedItem={item.isEdited}
                        setEditedItem={setEditedItem}
                        updateTodo={updateTodo}
                    />
                );
            })}
        </div>
    );
};
