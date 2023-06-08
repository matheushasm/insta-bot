require('dotenv').config();
const Unsplash = require('unsplash-js').createApi;
const { getRandomArray } = require('./helpers/getRandomArray');


//Connection
const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

async function getPhoto (query) {

    const response = await unsplash.search.getPhotos({ query: query });
    const photo = await response.response.results[getRandomArray(response.response.results)];
    return photo.urls.full;
}

function randomArr (arr) {
    return Math.floor(Math.random() * arr.length)
}

module.exports = { getPhoto };