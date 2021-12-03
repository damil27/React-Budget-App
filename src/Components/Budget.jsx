import React,{useContext} from "react";
import { AppContext } from "../Context/AppContext";
const Budget = () =>{
    const {budget} = useContext(AppContext)
    return (
        <div className="alert alert-info" >
            <span> Budget: $ {budget}</span>
        </div>
    )
}

export default Budget;