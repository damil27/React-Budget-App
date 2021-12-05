import { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenses = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // alert("name :" + name + "cost :" + cost);
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseFloat(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required="required"
              id="name"
              className="form-control"
            />
          </div>
          <div className="col-md">
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              required="required"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenses;
