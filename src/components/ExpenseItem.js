import './ExpenseItem.css';

function ExpenseItem(props) {

    let month = props.expenseData.date.toLocaleString('en-US', {month: 'long'});
    let year = props.expenseData.date.getFullYear();
    let day = props.expenseData.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div>
                <h2 className="expense-item__description">{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;