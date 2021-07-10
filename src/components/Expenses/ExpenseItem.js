import './ExpenseItem.css';
import './ExpenseDate'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate expenseData={props.expenseData}></ExpenseDate>
            <div>
                <h2 className="expense-item__description">{props.expenseData.title}</h2>
                <div className="expense-item__price">${props.expenseData.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;