import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpenseData(expenseData);
    }
    const onClickAddNewExpenseHandler = () => {
        setShowForm(!showForm);
    }
    if(!showForm)
        return (
            <div className="new-expense">
                <button type="button" onClick={onClickAddNewExpenseHandler}>Add New Expense</button>
            </div>
        );
    else
        return (
            <div className='new-expense'>
                <ExpenseForm
                    onClickHandler={onClickAddNewExpenseHandler}
                    onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        );
};

export default NewExpense;