import { useState } from 'react';

import Button from '../../UI/Button/Button';
import classNames from './CourseInput.module.css';

// import styled from 'styled-components';

// const FromControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
//       color: border: 1px solid ${(props) => (props.controlIsValid ? 'black' : 'red')};
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid ${(props) => (props.controlIsValid ? '#ccc' : 'red')};
//       background: ${(props) => (props.controlIsValid ? 'transparent' : '#ffd7d7')};
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}
// `;

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setValidation] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length !== 0) {
			setValidation(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length !== 0) {
			props.onAddGoal(enteredValue);
		} else {
			setValidation(false);
		}
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={`${classNames['form-control']} ${!isValid && classNames.invalid}`}>
				<label>Course Goal</label>
				<input
					type='text'
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type='submit'>Add Goal</Button>
		</form>
	);
};

export default CourseInput;
