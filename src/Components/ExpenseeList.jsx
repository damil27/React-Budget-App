 import React from "react";
 import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses  = [
        { id:234 , name:"shopping", cost: 50 },
        { id:234 , name:"Transport", cost: 50 },
        { id:234 , name:"Feeding", cost: 50999 }
    ]
    return (
        <ul className="list-group">

            { expenses.map((expense)=><ExpenseItem 
            id={expense.id} 
            name={expense.name} 
            cost={expense.cost} />) }
        </ul>
      );
}
 
export default ExpenseList;