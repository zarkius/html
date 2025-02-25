// script.js

// Function to create a photo element
function createPhotoElement(src, alt) {
    const div = document.createElement('div');
    div.className = 'photo';
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    div.appendChild(img);
    return div;
}

// Function to add photos to the grid
function addPhotosToGrid(photoGrid, photoUrls) {
    photoUrls.forEach((url, index) => {
        const photoElement = createPhotoElement(url, `Foto ${index + 1}`);
        photoGrid.appendChild(photoElement);
    });
}

// Example photo URLs (you can add as many as you want)
const photoUrls = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg',
    'foto7.jpg',
    'foto8.jpg',
    'foto9.jpg',
    'foto10.jpg', // Add more URLs here
];

// Get the photo grid element
const photoGrid = document.getElementById('photoGrid');

// Add photos to the grid
addPhotosToGrid(photoGrid, photoUrls);