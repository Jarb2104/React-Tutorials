const newMovieModal = document.getElementById('add-modal');
const addMovieBtn = document.getElementById('add-button');
const movieListEmptySection = document.getElementById('entry-text');
const movieListUL = document.getElementById('movie-list');

const deleteConfirmationModal = document.getElementById('delete-modal');
const confirmDeleteBtn = document.getElementById('confirm-del-button-modal');
let cancelDeleteBtn = document.getElementById('cancel-del-button-modal');

const movieDataInputs = document.querySelectorAll('input');
const cancelMovieModalBtn = document.getElementById('cancel-button-modal');
const addlMovieModalBtn = document.getElementById('add-button-modal');

const backdropElement = document.getElementById('backdrop');

const favoritesMovieData = [];

const toggleMovieModalHandler = () => {
	toggleNewMovieModal();
	toggleBackdrop();
};

const addMovieHandler = () => {
	const inputTitle = movieDataInputs[0].value;
	const inputImgUrl = movieDataInputs[1].value;
	const inputRating = movieDataInputs[2].value;

	if (inputTitle.trim() === '' || inputImgUrl.trim() === '' || inputRating.trim() === '' || +inputRating < 1 || +inputRating > 5) {
		alert('Wrong movie data');
	} else {
		const newMovie = {
			movieId: favoritesMovieData.length,
			movieTitle: inputTitle,
			movieImgUrl: inputImgUrl,
			movieRating: inputRating,
		};
		favoritesMovieData.push(newMovie);
		console.log(favoritesMovieData);
		updateEmptyMovieList();
		addToMovieList(newMovie);
		clearMovieModal();
		toggleMovieModalHandler();
	}
};

const deleteMovieHandler = (movieId) => {
	toggleConfirmationDelete();
	toggleBackdrop();

	const bindedDeleteHandler = deleteFromMovieListHandler.bind(null, movieId);
	confirmDeleteBtn.addEventListener('click', bindedDeleteHandler);
	cancelDeleteBtn.replaceWith(cancelDeleteBtn.cloneNode(true));
	cancelDeleteBtn = document.getElementById('cancel-del-button-modal');
	cancelDeleteBtn.addEventListener('click', cancelDeleteHandler.bind(null, bindedDeleteHandler));
};

const cancelMovieHandler = () => {
	toggleMovieModalHandler();
	clearMovieModal();
};

const backdropCLickHandler = () => {
	toggleBackdrop();
	hideNewMovieModal();
	hideConfirmationDelete();
};

const updateEmptyMovieList = () => {
	if (favoritesMovieData.length === 0) {
		movieListEmptySection.style.display = 'block';
	} else {
		movieListEmptySection.style.display = 'none';
	}
};

const addToMovieList = (movieItem) => {
	const newMovieDocElement = document.createElement('li');
	newMovieDocElement.className = 'movie-element';
	newMovieDocElement.innerHTML = `
	<div class="movie-element__image">
	<img src="${movieItem.movieImgUrl}" alt="${movieItem.movieTitle}"/>
	</div>
	<div class="movie-element__info">
	<h2>${movieItem.movieTitle}</h2>
	<p>${movieItem.movieRating}/5 STARS!</p>
	</div>
	`;
	newMovieDocElement.addEventListener('click', deleteMovieHandler.bind(null, movieItem.movieId));
	movieListUL.append(newMovieDocElement);
};

const deleteFromMovieListHandler = (movieId) => {
	let movieIndex = 0;
	for (movieIndex; movieIndex < favoritesMovieData.length; movieIndex++) {
		if (favoritesMovieData[movieIndex].movieId === movieId) {
			break;
		}
	}
	favoritesMovieData.splice(movieIndex, 1);
	movieListUL.children[movieIndex].remove();
	updateEmptyMovieList();
	hideConfirmationDelete();
	toggleBackdrop();
};

const clearMovieModal = () => {
	for (const input of movieDataInputs) {
		input.value = '';
	}
};

const confirmDeleteHandler = () => {};

const cancelDeleteHandler = (bindedDeleteHandler) => {
	confirmDeleteBtn.removeEventListener('click', bindedDeleteHandler);
	toggleConfirmationDelete();
	toggleBackdrop();
};

const toggleNewMovieModal = () => {
	newMovieModal.classList.toggle('visible');
};

const hideNewMovieModal = () => {
	newMovieModal.classList.remove('visible');
};

const toggleConfirmationDelete = () => {
	deleteConfirmationModal.classList.toggle('visible');
};

const hideConfirmationDelete = () => {
	deleteConfirmationModal.classList.remove('visible');
};

const toggleBackdrop = () => {
	backdropElement.classList.toggle('visible');
};

addMovieBtn.addEventListener('click', toggleMovieModalHandler);

addlMovieModalBtn.addEventListener('click', addMovieHandler);
cancelMovieModalBtn.addEventListener('click', cancelMovieHandler);

backdropElement.addEventListener('click', backdropCLickHandler);
