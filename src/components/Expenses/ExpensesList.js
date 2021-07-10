import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    if(props.filteredExpense.length === 0) {
        return <p>No expenses found.</p>;
    }

    return <ul  className="expenses-list">
            {
                props.filteredExpense.map(expense => <ExpenseItem key={expense.id} expenseData={expense}/>)
            }
        </ul>
}

export default ExpensesList;