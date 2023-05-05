const S3_BUCKET_NAME = 'famefinderassets';
const API_GW = 'https://p9t80pbgh0.execute-api.us-east-1.amazonaws.com/dev';
let BUCKET_URL = `${API_GW}/${S3_BUCKET_NAME}`;

const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10 MB
const allowedExtensions = ['jpg', 'jpeg', 'png'];

const validateFileExt = (file) => {
	const fileName = file?.name.toLowerCase();
	const extension = fileName?.split('.').pop();
	return allowedExtensions.includes(extension);
};

function readFileAsDataURL(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);

		reader.readAsDataURL(file);
	});
}

export const uploadImage = async (file) => {
	let output = {
		error: null,
		imageUrl: null,
		celebrityFaces: [],
	};

	try {
		if (!validateFileExt(file)) {
			throw new Error('Please upload a jpeg, jpg or png file');
		}
		if (file.size > MAX_FILE_SIZE) {
			throw new Error('Image size cannot exceed 10MB');
		}

		let imageUrl = `${BUCKET_URL}/${file?.name}`;

		// Read the file as a data URL
		const dataUrl = await readFileAsDataURL(file);

		// Extract the base64-encoded data from the data URL
		const base64Data = dataUrl.split(',')[1];
		// Make a PUT request to the API Gateway with the base64-encoded data
		const response = await fetch(imageUrl, {
			method: 'PUT',
			body: JSON.stringify({ image_data: base64Data }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error(
				`Failed to upload image with status - ${response.status}`
			);
		}

		const data = await response.json();

		if (!data) {
			throw new Error(
				'Oops! something went wrong - could not analyse image'
			);
		}

		output.imageUrl = imageUrl;
		output.celebrityFaces = data.CelebrityFaces;
		return output;
	} catch (error) {
		console.error('There was a problem uploading the image:', error);
		output.error = error;
		return output;
	}
};

export const displayImage = (imageUrl) => {
	const imageElement = document.getElementById('image');

	fetch(imageUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.text();
		})
		.then((data) => {
			const img = new Image();
			imageElement.src = `data:image/jpeg;base64,${data}`;
			imageElement.style.display = 'block';
		})
		.catch((error) => {
			console.error('There was a problem with the API call:', error);
		});
};
