import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
	if (props.filteredExpenseList.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses for the selected year.</h2>;
	} else {
		return (
			<ul className='expenses-list'>
				{props.filteredExpenseList.map((exp) => (
					<ExpenseItem
						key={exp.id}
						description={exp.description}
						amount={exp.amount}
						date={exp.date}
					/>
				))}
			</ul>
		);
	}
};

export default ExpenseList;
