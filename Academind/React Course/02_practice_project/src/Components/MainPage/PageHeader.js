const PageHeader = (props) => {
	return (
		<header>
			<img src={props.image} alt={props.title} />
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</header>
	);
};

export default PageHeader;
