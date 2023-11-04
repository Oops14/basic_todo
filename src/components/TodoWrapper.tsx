import React, {useState} from 'react';
import {TodoForm} from "./TodoForm";
import {TodoItem} from "./TodoItem";

export const TodoWrapper = () => {
    const [todoItem, setTodoItem]: any = useState([]);
    // const [completed, setCompleted]: any = useState(false);

    React.useEffect(() => console.log("data", todoItem), [todoItem]);
    //React.useEffect(() => console.log("Complete: ", completed), [completed]);

    const addTodo = (todo: any) => {
        setTodoItem([...todoItem, {task: todo, isComplited: false}]);
    }

    return (
        <div className={"todo-wrapper"}>
            <TodoForm addTodo={addTodo}/>

            {todoItem.map((item: any, index: number) => {
                return (
                    <TodoItem
                        todoTitle={item.task}
                        key={index}
                        id={index}
                        complited={addTodo}
                    />
                );
            })}
        </div>
    );
};