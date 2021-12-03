import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import ExpenseTotal from "./Components/ExpensesTotal";
import ExpenseList from "./Components/ExpenseeList";
import AddExpenses from "./Components/AddExpenses";
import { AppProvider } from "./Context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container mt-3">
        <h1>My Budger planner!</h1>
        <div className="row mt-3">
          <div className="col-md">
            <Budget />
          </div>
          <div className="col-md">
            <Remaining />
          </div>
          <div className="col-md">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3"> Expenses</h3>
        <div className="row">
          <div className="col-md">
            <ExpenseList />
          </div>

          <div className="mt-3">
            <h2> Add Expenses</h2>
            <AddExpenses />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
