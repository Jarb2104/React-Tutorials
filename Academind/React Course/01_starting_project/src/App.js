import ExpenseList from './components/Expenses/ExpenseList';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = () => {
	const initExpenses = [
		{ id: 'g0', description: 'Magic the Gathering Cards', amount: 13161.92, date: new Date(2023, 7, 28) },
		{ id: 'g1', description: 'DD School', amount: 1316.21, date: new Date(2023, 6, 13) },
		{ id: 'g2', description: 'Waifus', amount: 13.16, date: new Date(2023, 6, 7) },
		{ id: 'g3', description: 'Groceries', amount: 316.92, date: new Date(2023, 5, 23) },
		{ id: 'g4', description: 'Udemy Courses', amount: 116.21, date: new Date(2023, 5, 22) },
		{ id: 'g5', description: 'Police Bribe', amount: 12.16, date: new Date(2023, 4, 15) },
		{ id: 'g6', description: 'Sexy Thongs', amount: 312.32, date: new Date(2023, 3, 3) },
	];

	const [expenses, changeExpensesList] = useState(initExpenses);

	const addNewExpenseHandler = (newExpenseData) => {
		changeExpensesList([...expenses, { id: 'g' + expenses.length, ...newExpenseData }]);
	};

	return (
		<div>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<ExpenseList expenseItems={expenses} />
		</div>
	);
};

export default App;
