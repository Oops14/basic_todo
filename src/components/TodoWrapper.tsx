import React, {ChangeEvent, useState} from "react";
import {TodoForm} from "./TodoForm";
import {TodoItem} from "./TodoItem";
import {v4 as uuidv4} from "uuid";

type TodoItemType = {
    id: string;
    task: string;
    isComplited: boolean;
    isEdited: boolean;
}

export const TodoWrapper = () => {
    const [todoItem, setTodoItem] = useState<Array<TodoItemType>>([]);
    React.useEffect(() => console.log("data", todoItem), [todoItem]);

    const [editedItem, setEditedItem] = useState<boolean>(true);

    // Add todo item to the list.
    const addTodo = (todo: any) => {
        setTodoItem([
            ...todoItem,
            {id: uuidv4(), task: todo, isComplited: false, isEdited: false},
        ]);
    };

    // Remove todo item.
    const removeElement = (id: string) => {
        setTodoItem(todoItem.filter((todo: any) => todo.id !== id));
    };

    // Set input as done.
    const isChecked = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        let check = e.currentTarget.checked;
        let checkedTodo = todoItem.find(item => item.id === id);
        
        if (checkedTodo) {
            checkedTodo.isComplited = check;
            setTodoItem([...todoItem]);
        }
    }

    const editTodo = (id: string) => {
        let edited = todoItem.map(item => item.id === id ? {...item, isEdited: editedItem} : item);
        setTodoItem(edited);
    }

    const updateTodo = (id: string, newTitle: any) => {
        let updated = todoItem.map(item => item.id === id ? {...item, task: newTitle, isEdited: !editedItem} : item);
        setTodoItem(updated);
    }

    return (
        <div className={"todo-wrapper"}>
            <TodoForm  addTodo={addTodo}/>

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
