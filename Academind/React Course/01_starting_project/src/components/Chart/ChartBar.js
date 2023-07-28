import './ChartBar.css';

const ChartBar = (props) => {
	let barFillHeight = '0%';
	if (props.barHeight > 0) {
		barFillHeight = Math.round((props.barFill / props.barHeight) * 100) + '%';
	}

	return (
		<li className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</li>
	);
};

export default ChartBar;
