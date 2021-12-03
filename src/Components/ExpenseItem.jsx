import { TiDelete } from "react-icons/ti";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_BUDGET",
      payload: props.id,
    });
  };
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span> {props.name}</span>
      <div>
        <span className="mr-3" style={{ color: "black" }}>
          ${props.cost}
        </span>
        <TiDelete
          size="1.5em"
          onClick={handleDelete}
          style={{ cursor: "pointer", color: "red" }}
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
