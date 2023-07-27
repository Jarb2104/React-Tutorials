import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const addNewExpenseHandler = (newExpenseData) => {
		props.onAddNewExpense(newExpenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onAddNewExpense={addNewExpenseHandler} />
		</div>
	);
};

export default NewExpense;
