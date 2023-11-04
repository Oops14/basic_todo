import React, {useState} from 'react';

type TodoItemPropsType = {
    todoTitle?: string;
    key: number;
    id: any;
    complited?: any;
}

export const TodoItem = (props: TodoItemPropsType) => {
    const [checked, SetChecked]: any = useState(true);

    return (
        <div className={`${ props.complited.isComplited ? "todo-item complited" : "todo-item" }`}>
            <h3 className={"todo-item-title"}>{props.todoTitle}</h3>

            <div>
                <a className={"btn btn-edit"} href="#">Edit</a>
                <a className={"btn btn-delete"} href="#">Delete</a>
                <input value={checked} onClick={() => {

                    if (checked) {
                        SetChecked(!checked);
                        props.complited.isComplited = checked;
                        console.log(props.complited.isComplited);
                        console.log(props.id);

                    } else {
                        SetChecked(!checked);
                        props.complited.isComplited = checked;
                        console.log(props.complited.isComplited);
                        console.log(props.id);
                    }


                }} className={"btn-checkbox"} type="checkbox"/>
            </div>
        </div>
    );
};