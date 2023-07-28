import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	let barMaxHeight = 0;
	for (const dataPoint of props.dataPoints) {
		if (+barMaxHeight < +dataPoint.value) {
			barMaxHeight = dataPoint.value;
		}
	}

	return (
		<ul className='chart'>
			{props.dataPoints.map((dp) => (
				<ChartBar
					key={dp.dpName}
					label={dp.dpName}
					barHeight={barMaxHeight}
					barFill={dp.value}
				/>
			))}
		</ul>
	);
};

export default Chart;
