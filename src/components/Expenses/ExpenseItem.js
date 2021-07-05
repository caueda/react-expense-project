import './ExpenseItem.css';
import './ExpenseDate'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseData.title);
    const clickHandler = () => {
        setTitle('Title Updated');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate expenseData={props.expenseData}></ExpenseDate>
            <div>
                <h2 className="expense-item__description">{title}</h2>
                <div className="expense-item__price">${props.expenseData.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;