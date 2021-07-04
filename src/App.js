import logo from './logo.svg';
import './App.css';
import './components/Expenses/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'New Laptop', amount: 1500.23, date: new Date(2021, 1, 13)},
        {title: 'New Wooden Desk', amount: 66.43, date: new Date(2021, 2, 2)},
        {title: 'Toilet Paper', amount: 23.80, date: new Date(2021, 3, 14)}
    ];
    return (
        <Expenses expenses={expenses}/>
    );
}

export default App;
