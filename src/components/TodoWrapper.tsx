import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
    const [todoItem, setTodoItem]: any = useState([]);

    React.useEffect(() => console.log("data", todoItem), [todoItem]);

    const addTodo = (todo: any) => {
        setTodoItem([
            ...todoItem,
            { id: uuidv4(), task: todo, isComplited: false },
        ]);
    };

    const removeElement = (id: number) => {
        setTodoItem(todoItem.filter((todo: any) => todo.id !== id));
    };

    return (
        <div className={"todo-wrapper"}>
            <TodoForm addTodo={addTodo} />

            {todoItem.map((item: any, index: number) => {
                return (
                    <TodoItem
                        todoTitle={item.task}
                        key={index}
                        id={item.id}
                        complited={addTodo}
                        deleteEl={removeElement}
                    />
                );
            })}
        </div>
    );
};
