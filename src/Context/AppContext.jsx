import { createContext,useReducer } from "react"



const AppReducer = (state, action) =>{
    switch(action.type){

        default:    
            return state
    }
}

const initialState = {
    budget:2000,
    expenses:[
        {id:11, name:"FoodStuff", cost: 20},
        {id:12, name:"Transprot", cost: 30},
        {id:13, name:"online Course", cost: 20},
    
    ]
};
// create context
export const AppContext = createContext()

//create a provider that will wrap it
export const AppProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer,initialState);// reducer hooks take two arg AppReducer and initialstate
    
    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }} > 
    {props.children}
    </AppContext.Provider>)
}
