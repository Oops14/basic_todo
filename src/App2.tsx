import React, { useReducer } from "react";

const App2 = () => {
    let initialState = { count: 0 };

    type State = {
        count: number;
    };
    
    type Action = {
        type: string;
    };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case 'INCREASE-VALUE': {
                return {count: state.count + 1}
            }
            case 'DECREASE-VALUE': {
                return {count: state.count - 1}
            }
            default: {
                return state;
            }
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="Counter">
            <div>{count.count}</div>
            <button onClick={() => {
                dispatch({type: 'INCREASE-VALUE'})
            }}>+</button>
            <button onClick={() => {
                dispatch({type: 'DECREASE-VALUE'})
            }}>-</button>
        </div>
    );
};

export default App2;
