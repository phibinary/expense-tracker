import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const SaveExpenseDataHandler = (expenseData) => {
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };

  const hideExpenseFormHAndler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button type="button" onClick={showExpenseFormHandler}>
          Add New Expense
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={hideExpenseFormHAndler}
        />
      )}
    </div>
  );
};

export default NewExpense;
