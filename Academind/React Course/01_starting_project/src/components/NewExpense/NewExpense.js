import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [showExpenseForm, toggleForm] = useState(false);

	const addNewExpenseHandler = (newExpenseData) => {
		props.onAddNewExpense(newExpenseData);
		toggleForm(false);
	};

	const onClickNewExpenseHandler = () => {
		toggleForm(true);
	};

	const onCancelClickHandler = () => {
		toggleForm(false);
	};

	return (
		<div className='new-expense'>
			{showExpenseForm ? (
				<ExpenseForm
					onAddNewExpense={addNewExpenseHandler}
					onCancelClick={onCancelClickHandler}
				/>
			) : (
				<button onClick={onClickNewExpenseHandler}>New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
