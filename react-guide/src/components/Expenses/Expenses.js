import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseList items={props.items} />
    </Card>
  );
};

export default Expenses;
