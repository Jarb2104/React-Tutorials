import Concept from './Concept';
import '../../index.css';

const ConceptsDisplay = (props) => {
	return (
		<lu id={props.displayId}>
			{props.concepts.map((cpt) => (
				<Concept concept={cpt}></Concept>
			))}
		</lu>
	);
};

export default ConceptsDisplay;
