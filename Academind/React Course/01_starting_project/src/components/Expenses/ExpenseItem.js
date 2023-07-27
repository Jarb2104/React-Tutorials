import { useState } from 'react';
import Card from '../CustomUI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const [expDescription, changeExpDescription] = useState(props.description);

	const changeExpenseHandler = () => {
		changeExpDescription('More tiny thongs');
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{expDescription}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={changeExpenseHandler}>Change Expense</button>
		</Card>
	);
};

export default ExpenseItem;
