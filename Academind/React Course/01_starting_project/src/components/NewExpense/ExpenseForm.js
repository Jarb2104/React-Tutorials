import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [newExpense, changeExpense] = useState({
		description: '',
		amount: 0,
		date: new Date('01/01/2020'),
	});

	const descriptionChangedHandler = (event) => {
		changeExpense((prevState) => {
			return { ...prevState, description: event.target.value };
		});
	};

	const amountChangedHandler = (event) => {
		changeExpense((prevState) => {
			return { ...prevState, amount: +event.target.value };
		});
	};
	const dateChangedHandler = (event) => {
		changeExpense((prevState) => {
			return { ...prevState, date: new Date(event.target.value) };
		});
	};

	const clearForm = () => {
		changeExpense({
			description: '',
			amount: 0,
			date: new Date('01/01/2020'),
		});
	};

	const newExpenseSubmitHandler = (event) => {
		event.preventDefault();
		props.onAddNewExpense(newExpense);
		clearForm();
	};

	const clickCancelHandler = (event) => {
		props.onCancelClick();
		clearForm();
	};

	return (
		<form onSubmit={newExpenseSubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Description</label>
					<input
						type='text'
						value={newExpense.description}
						onChange={descriptionChangedHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.0'
						step='0.01'
						value={newExpense.amount}
						onChange={amountChangedHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2000-01-01'
						max='2030-12-31'
						value={newExpense.date.toISOString().slice(0, 10)}
						onChange={dateChangedHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button
					type='button'
					onClick={clickCancelHandler}
				>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
