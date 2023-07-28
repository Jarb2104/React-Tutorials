import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
	{ id: 'g0', description: 'Magic the Gathering Cards', amount: 13161.92, date: new Date(2023, 7, 28) },
	{ id: 'g1', description: 'DD School', amount: 1316.21, date: new Date(2023, 6, 13) },
	{ id: 'g2', description: 'Waifus', amount: 13.16, date: new Date(2023, 6, 7) },
	{ id: 'g3', description: 'Groceries', amount: 316.92, date: new Date(2019, 5, 23) },
	{ id: 'g4', description: 'Udemy Courses', amount: 116.21, date: new Date(2021, 5, 22) },
	{ id: 'g5', description: 'Police Bribe', amount: 12.16, date: new Date(2021, 4, 15) },
	{ id: 'g6', description: 'Sexy Thongs', amount: 312.32, date: new Date(2020, 3, 3) },
];

const App = () => {
	const [expenses, changeExpensesList] = useState(DUMMY_EXPENSES);

	const addNewExpenseHandler = (newExpenseData) => {
		changeExpensesList((prevState) => [...prevState, { id: 'g' + prevState.length, ...newExpenseData }]);
	};

	return (
		<div>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<Expenses expenseItems={expenses} />
		</div>
	);
};

export default App;
