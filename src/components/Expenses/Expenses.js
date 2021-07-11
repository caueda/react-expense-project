import './Expenses.css';
import './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2019');
    const filteredExpense = props.expenses.filter(expense => expense.date.getFullYear().toString() === yearSelected);

    return (
        <div>
            <Card className="expenses">x
                <ExpensesFilter
                    filteredYear={yearSelected}
                    onChangeFilter={setYearSelected}/>
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList filteredExpense={filteredExpense}/>
            </Card>
        </div>
    );
}

export default Expenses;