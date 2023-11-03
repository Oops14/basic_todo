import React, {useState} from 'react';
import {TodoForm} from "./TodoForm";
import {TodoItem} from "./TodoItem";

export const TodoWrapper = () => {
    const [todoItem, setTodoItem]: any = useState([]);
    //React.useEffect(() => console.log("data", todoItem), [todoItem])

    const addTodo = (todo: any) => {
        setTodoItem([...todoItem, {task: todo}]);
    }

    return (
        <div className={"todo-wrapper"}>
            <TodoForm addTodo={addTodo}/>

            {todoItem.map((item: any, index: number) => {
                console.log(typeof item.task)

                return (
                    <TodoItem todoTitle={item.task} key={index}/>
                );
            })}
        </div>
    );
};