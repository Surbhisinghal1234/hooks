import { useReducer } from "react";

export const ReducerComponent = () => {
    const initialState = {
        count : 0,
        inc:2,
        dec:2,
       }

  const reducer = (state, action) => {

    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }

    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //     return state = 0;
    //   }

    switch (action.type){
        case "INCREMENT": 
        return {...state,count: state.count + state.inc} ;


        case "DECREMENT": 
        return{...state,count: state.count -state.dec};

          
        case "RESET": 
        return {...state,count: 0} ;

        default : return state

    }

  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium" >{state.count}</h1>
        <div  className="flex flex-col gap-4">

       
        <button className="bg-red-500 px-4 py-1 rounded-md text-white font-medium" onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button className="bg-green-500 px-4 py-1 rounded-md text-white font-medium" onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button className="bg-blue-500 px-4 py-1 rounded-md text-white font-medium" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
        </div>
      </div>
    </>
  );
};
