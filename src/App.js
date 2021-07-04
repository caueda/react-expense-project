import logo from './logo.svg';
import './App.css';
import './components/ExpenseItem';
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'New Laptop', amount: 1500.23, date: new Date(2021, 1, 13)},
        {title: 'New Wooden Desk', amount: 66.43, date: new Date(2021, 2, 2)},
        {title: 'Toilet Paper', amount: 23.80, date: new Date(2021, 3, 14)}
    ];
    const expenseItens = expenses.map(expense => <ExpenseItem expenseData={expense}></ExpenseItem>)
    return (
        <div>
            <h2>Let's get started!</h2>
            {expenseItens}
        </div>
    );
}

export default App;
