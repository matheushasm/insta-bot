const pexels = require('pexels');
const { getRandomArray } = require('./helpers/getRandomArray');

// Conection
const client = pexels.createClient(process.env.PEXELS_SECRET_KEY);

const getPhoto = async (query) => {
    const response = await client.photos.search({ query, per_page: 80 });
    const photo = await response.photos[getRandomArray(response.photos)];
    return photo.src.original;
};

module.exports = { getPhoto };