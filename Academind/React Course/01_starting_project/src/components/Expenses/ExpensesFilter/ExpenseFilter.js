import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
	const yearSelectionHandler = (event) => {
		props.onYearSelected(event.target.value);
	};

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select
					value={props.selectedYear}
					onChange={yearSelectionHandler}
				>
					{Array.from(Array(20).keys()).map((n) => (
						<option value={2010 + n}>{2010 + n}</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
