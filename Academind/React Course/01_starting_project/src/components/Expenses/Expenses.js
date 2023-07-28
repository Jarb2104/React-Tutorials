import { useState } from 'react';
import Card from '../CustomUI/Card';
import ExpensesFilter from './ExpensesFilter/ExpenseFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpenseListChart from './ExpenseListChar';

const Expenses = (props) => {
	const expenses = props.expenseItems;
	const [filterYear, changeFilter] = useState(2020);

	const getSelectedYear = (selectedYear) => {
		changeFilter(selectedYear);
	};

	const filteredExpenses = expenses.filter((exp) => +exp.date.getFullYear() === +filterYear);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selectedYear={filterYear}
				onYearSelected={getSelectedYear}
			/>
			<ExpenseListChart chartExpenseItems={filteredExpenses} />
			<ExpenseList filteredExpenseList={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
