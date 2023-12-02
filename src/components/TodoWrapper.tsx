import React, {ChangeEvent, MouseEventHandler, useState} from "react";
import {TodoForm} from "./TodoForm";
import {TodoItem} from "./TodoItem";
import {v4 as uuidv4} from "uuid";

type TodoItemType = {
    id: string;
    task: string;
    isComplited: boolean;
}

export const TodoWrapper = () => {
    const [todoItem, setTodoItem] = useState<Array<TodoItemType>>([]);

    React.useEffect(() => console.log("data", todoItem), [todoItem]);

    const addTodo = (todo: any) => {
        setTodoItem([
            ...todoItem,
            {id: uuidv4(), task: todo, isComplited: false},
        ]);
    };

    const removeElement = (id: string) => {
        setTodoItem(todoItem.filter((todo: any) => todo.id !== id));
    };

    const isChecked = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        let check = e.currentTarget.checked;
        let checkedTodo = todoItem.find(item => item.id === id);
        
        if (checkedTodo) {
            checkedTodo.isComplited = check;
            setTodoItem([...todoItem]);
        }
    }

    return (
        <div className={"todo-wrapper"}>
            <TodoForm addTodo={addTodo}/>

            {todoItem.map((item) => {
                return (
                    <TodoItem
                        todoTitle={item.task}
                        key={item.id}
                        id={item.id}
                        complited={item.isComplited}
                        deleteEl={removeElement}
                        isChecked={isChecked}
                    />
                );
            })}
        </div>
    );
};
