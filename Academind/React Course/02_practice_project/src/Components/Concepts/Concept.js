import ListCard from '../UIElements/ListCard';

const Concept = (props) => {
	return (
		<ListCard>
			<img src={props.concept.image} alt={props.concept.title} />
			<h2>{props.concept.title}</h2>
			<p>{props.concept.description}</p>
		</ListCard>
	);
};

export default Concept;
