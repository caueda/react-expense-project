import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2019');
    const filteredExpense = props.expenses.filter(expense => expense.date.getFullYear().toString() === yearSelected);

    return (
        <div>
            <Card className="expenses">x
                <ExpensesFilter
                    filteredYear={yearSelected}
                    onChangeFilter={setYearSelected}/>
                <ExpensesList filteredExpense={filteredExpense}/>
            </Card>
        </div>
    );
}

export default Expenses;