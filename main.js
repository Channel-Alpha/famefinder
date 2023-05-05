import './style.css';

uploadImage(document.querySelector('#upload'));

import { uploadImage, displayImage } from './image.js';

const inputElement = document.getElementById('input');
const uploadButton = document.getElementById('upload-btn');
const errorMessage = document.getElementById('error-message');
const imageElement = document.getElementById('image');
const responseContainer = document.getElementById('analysis');

inputElement.addEventListener('change', () => {
	errorMessage.style.display = 'none';
	imageElement.style.display = 'none';
	responseContainer.style.display = 'none';
});

uploadButton.addEventListener('click', async () => {
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

		celebrityFaces.forEach((item) => {
			responseContainer.innerHTML = `<p>${item.Name}</p>`;
		});
		responseContainer.style.display = 'block';
	} catch (error) {
		console.error(error);
		errorMessage.textContent = error.message;
		errorMessage.style.display = 'block';
		inputElement.value = '';
	}
});
