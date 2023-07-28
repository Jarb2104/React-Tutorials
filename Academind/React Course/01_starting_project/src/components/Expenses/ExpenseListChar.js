import Chart from '../Chart/Chart';

const ExpenseListChart = (props) => {
	const chartDataPoints = [
		{ dpName: 'Jan', value: 0 },
		{ dpName: 'Feb', value: 0 },
		{ dpName: 'Mar', value: 0 },
		{ dpName: 'Apr', value: 0 },
		{ dpName: 'May', value: 0 },
		{ dpName: 'Jun', value: 0 },
		{ dpName: 'Jul', value: 0 },
		{ dpName: 'Aug', value: 0 },
		{ dpName: 'Sep', value: 0 },
		{ dpName: 'Oct', value: 0 },
		{ dpName: 'Nov', value: 0 },
		{ dpName: 'Dec', value: 0 },
	];

	for (const expense of props.chartExpenseItems) {
		const monthExpense = expense.date.getMonth();
		chartDataPoints[monthExpense].value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseListChart;
