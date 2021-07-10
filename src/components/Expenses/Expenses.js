import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2019');
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filteredYear={yearSelected} onChangeFilter={setYearSelected}/>
                {props.expenses.filter(expense => expense.date.getFullYear() === Number(yearSelected)).map(expense => <ExpenseItem expenseData={expense}/>)}
            </Card>
        </div>
    );
}

export default Expenses;