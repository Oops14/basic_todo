import React, {
    ChangeEvent,
    Reducer,
    useEffect,
    useReducer,
    useState,
} from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

type TodoItemType = {
    id: string;
    task: string;
    isComplited: boolean;
    isEdited: boolean;
};

function reducer(state: any, action: any) {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodoItem = [
                ...state,
                {
                    id: uuidv4(),
                    task: action.payload.todo,
                    isComplited: false,
                    isEdited: false,
                },
            ];
            return newTodoItem;
        }
        case "REMOVE_TODO": {
            let filteredItem = state.filter(
                (todo: TodoItemType) => todo.id !== action.payload.id
            );
            return filteredItem;
        }
        case "CHANGE_STATUS": {
            let checkedTodo = state.map((item: any) =>
                item.id === action.payload.id
                    ? { ...item, isComplited: action.payload.check }
                    : item
            );
            return checkedTodo;
        }
        case "EDIT_TODO": {
            let edited = state.map((item: any) =>
                item.id === action.payload.id
                    ? { ...item, isEdited: action.payload.editedItem }
                    : item
            );
            return edited;
        }
        case "UPDATE_TODO": {
            let updated = state.map((item: any) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          task: action.payload.newTitle,
                          isEdited: !action.payload.editedItem,
                      }
                    : item
            );
            return updated;
        }
        default:
            return state;
    }
}

const initialState: Array<TodoItemType> = [
    { id: uuidv4(), task: "task 1", isComplited: false, isEdited: false },
    { id: uuidv4(), task: "task 2", isComplited: false, isEdited: false },
];

export const TodoWrapper = () => {
    const [todoItem, dispatch] = useReducer<Reducer<any, any>>(
        reducer,
        initialState
    );
    const [editedItem, setEditedItem] = useState<boolean>(true);

    // Add todo item to the list.
    const addTodo = (todo: string) => {
        dispatch({ type: "ADD_TODO", payload: { todo } });
    };

    // Remove todo item.
    const removeElement = (id: string) => {
        dispatch({ type: "REMOVE_TODO", payload: { id } });
    };

    // Set input as done.
    const isChecked = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        let check = e.currentTarget.checked;
        dispatch({ type: "CHANGE_STATUS", payload: { check, id } });
    };

    // Edit func.
    const editTodo = (id: string) => {
        dispatch({ type: "EDIT_TODO", payload: { id, editedItem } });
    };

    // Update todo after editing.
    const updateTodo = (id: string, newTitle: any) => {
        dispatch({
            type: "UPDATE_TODO",
            payload: { id, newTitle, editedItem },
        });
    };

    return (
        <div className={"todo-wrapper"}>
            <TodoForm addTodo={addTodo} />

            {todoItem.map((item: any) => {
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
