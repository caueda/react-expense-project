import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('2019');
    const filteredExpense = props.expenses.filter(expense => expense.date.getFullYear().toString() === yearSelected);
    const getContent = () => {
        if(filteredExpense.length === 0)
            return <p>No expenses found.</p>;
        else
            return filteredExpense.map(expense => <ExpenseItem key={expense.id} expenseData={expense}/>);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    filteredYear={yearSelected}
                    onChangeFilter={setYearSelected}/>
                {getContent()}
            </Card>
        </div>
    );
}

export default Expenses;