const S3_BUCKET_NAME = 'famefindertest';
const API_GW = 'https://jl0w6bn9ua.execute-api.eu-north-1.amazonaws.com/dev';
let BUCKET_URL = `${API_GW}/${S3_BUCKET_NAME}`;

const allowedExtensions = ['jpg', 'jpeg', 'png'];

const validateFile = (file) => {
	const fileName = file?.name.toLowerCase();
	const extension = fileName?.split('.').pop();
	return allowedExtensions.includes(extension);
};

export const uploadImage = async (file) => {
	let output = {
		error: null,
		imageUrl: null,
	};

	if (!validateFile(file)) {
		output.error = new Error('Please upload a valid image file');
		return output;
	}

	let imageUrl = `${BUCKET_URL}/${file?.name}`;

	const response = await fetch(imageUrl, {
		method: 'PUT',
		body: file,
	});
	if (!response.ok) {
		throw new Error('Failed to upload image');
	}
	output.imageUrl = imageUrl;
	return output;
};

export const displayImage = (imageUrl) => {
	const imageElement = document.getElementById('image');

	fetch(imageUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.blob();
		})
		.then((blob) => {
			const objectUrl = URL.createObjectURL(blob);
			imageElement.src = objectUrl;
			imageElement.style.display = 'block';
		})
		.catch((error) => {
			console.error('There was a problem with the API call:', error);
		});
};
