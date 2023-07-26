import Card from '../CustomUI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
	const expenses = props.expenseItems;
	return (
		<Card className='expenses'>
			<ExpenseItem description={expenses[0].description} amount={expenses[0].amount} date={expenses[0].date} />
			<ExpenseItem description={expenses[1].description} amount={expenses[1].amount} date={expenses[1].date} />
			<ExpenseItem description={expenses[2].description} amount={expenses[2].amount} date={expenses[2].date} />
			<ExpenseItem description={expenses[3].description} amount={expenses[3].amount} date={expenses[3].date} />
			<ExpenseItem description={expenses[4].description} amount={expenses[4].amount} date={expenses[4].date} />
			<ExpenseItem description={expenses[5].description} amount={expenses[5].amount} date={expenses[5].date} />
			<ExpenseItem description={expenses[6].description} amount={expenses[6].amount} date={expenses[6].date} />
		</Card>
	);
};

export default ExpenseList;
