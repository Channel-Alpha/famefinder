import './style.css';

import { uploadImage, displayImage } from './image.js';

const inputElement = document.getElementById('input');
const uploadButton = document.getElementById('upload-btn');
const errorMessage = document.getElementById('error-message');
const imageElement = document.getElementById('image');
const responseContainer = document.getElementById('output');
const infoElement = document.getElementById('upload-info');
const changeElement = document.getElementById('change-info');
const loader = document.querySelector('.loader');

function showSpinner() {
	loader.style.display = 'block';
}

function hideSpinner() {
	loader.style.display = 'none';
}

inputElement.addEventListener('change', () => {
	errorMessage.style.display = 'none';
	imageElement.style.display = 'none';
	infoElement.style.display = 'none';
	changeElement.style.display = 'block';
	responseContainer.style.display = 'none';
});

uploadButton.addEventListener('click', async () => {
	showSpinner();
	const file = inputElement.files[0];
	if (!file) {
		errorMessage.textContent = 'Please select an image file';
		errorMessage.style.display = 'block';
		return;
	}
	try {
		const { imageUrl, error, celebrityFaces } = await uploadImage(file);
		if (error) {
			throw error;
		}
		displayImage(imageUrl);

		if (celebrityFaces.length < 1) {
			throw new Error('No celebrity recognized.');
		}
		let htmlString = '';

		celebrityFaces.forEach((item) => {
			htmlString += `<p>${item.Name}</p>`;
		});
		responseContainer.innerHTML = htmlString;
		responseContainer.style.display = 'block';
		hideSpinner();
	} catch (error) {
		console.error(error);
		errorMessage.textContent = error.message;
		errorMessage.style.display = 'block';
		inputElement.value = '';
		hideSpinner();
	}
});
