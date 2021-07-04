import './ExpenseDate.css';

function ExpenseDate(props) {
    let month = props.expenseData.date.toLocaleString('en-US', {month: 'long'});
    let year = props.expenseData.date.getFullYear();
    let day = props.expenseData.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;