import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            <h2>Let's get started</h2>
            {props.expenses.map(expense => <ExpenseItem expenseData={expense}/>)}
        </Card>
    );
}

export default Expenses;