import { useState } from 'react';
import Card from '../CustomUI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter/ExpenseFilter';

const ExpenseList = (props) => {
	const expenses = props.expenseItems;
	const [filterYear, changeFilter] = useState(2020);

	const getSelectedYear = (selectedYear) => {
		changeFilter(selectedYear);
	};

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selectedYear={filterYear}
				onYearSelected={getSelectedYear}
			></ExpensesFilter>
			{expenses.map((exp) => (
				<ExpenseItem
					key={exp.id}
					description={exp.description}
					amount={exp.amount}
					date={exp.date}
				/>
			))}
		</Card>
	);
};

export default ExpenseList;
