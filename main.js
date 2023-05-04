import './style.css';

uploadImage(document.querySelector('#upload'));

import { uploadImage, displayImage } from './image.js';

const inputElement = document.getElementById('input');
const uploadButton = document.getElementById('upload-btn');
const errorMessage = document.getElementById('error-message');

inputElement.addEventListener('change', () => {
	errorMessage.style.display = 'none';
});

uploadButton.addEventListener('click', async () => {
	const file = inputElement.files[0];
	if (!file) {
		errorMessage.textContent = 'Please select an image file';
		errorMessage.style.display = 'block';
		return;
	}
	try {
		const { imageUrl, error, analysis } = await uploadImage(file);
		if (error) {
			errorMessage.textContent = error.message;
			errorMessage.style.display = 'block';
			throw error;
		}
		displayImage(imageUrl);

		const container = document.getElementById('analysis');

		analysis?.CelebrityFaces?.forEach((item) => {
			const div = document.createElement('div');
			div.innerHTML = `<p>${item.Name}</p>`;
			container.appendChild(div);
		});
	} catch (error) {
		console.error(error);
	}
});
