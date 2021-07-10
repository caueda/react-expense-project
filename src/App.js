import logo from './logo.svg';
import './App.css';
import './components/Expenses/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import './components/NewExpense/NewExpense'
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const MOCK_EXPENSES = [
    {id: '1', title: 'Car Insurance', amount: 294.67, date: new Date(2019, 2, 28)},
    {id: '2', title: 'New Laptop', amount: 1500.23, date: new Date(2020, 1, 13)},
    {id: '3', title: 'New Wooden Desk', amount: 66.43, date: new Date(2021, 2, 2)},
    {id: '4', title: 'Toilet Paper', amount: 23.80, date: new Date(2021, 3, 14)}
];

function App() {
    const [expenses, setExpenses] = useState(MOCK_EXPENSES);
    const addExpenseDataHandler = expense => {
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
    }
    return (
        <div>
            <NewExpense addExpenseData={addExpenseDataHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
