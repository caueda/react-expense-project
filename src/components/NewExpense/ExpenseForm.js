import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    const onSaveDataExpense = props.onSaveExpenseData;
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onChangeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const onChangeAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const onChangeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        onSaveDataExpense(expenseData);
        clear();
        props.onClickHandler();
    }

    const clear = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title</label>
                    <input id='title'
                           type='text'
                           value={enteredTitle}
                           onChange={onChangeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Amount</label>
                    <input id='title'
                           type="number"
                           value={enteredAmount}
                           min="0.01" step="0.01"
                           onChange={onChangeAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Date</label>
                    <input id='title'
                           type="date"
                           min='2019-01-01'
                           max='2022-12-31'
                           value={enteredDate}
                           onChange={onChangeDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onClickHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;