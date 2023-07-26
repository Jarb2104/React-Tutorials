import '../../index.css';

const ListCard = (props) => {
	const classNames = 'concept ' + (props.className === undefined ? '' : props.className);
	return <li className={classNames}>{props.children}</li>;
};

export default ListCard;
