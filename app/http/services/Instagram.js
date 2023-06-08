require('dotenv').config();
const { IgApiClient } = require('instagram-private-api');
const axios = require('axios');

 // Download Images
async function getImageBuffer (photo) {

    const response = await axios.get(photo , {
        responseType: 'arraybuffer'
    });
    const json = await response.data;

    return Buffer.from(json, 'binary');
}

    //Post on Instagram
async function postToInsta ({username, password}, photo, description) {

            //Connection 
        // 2FA must desabled
    const ig = new IgApiClient();
    ig.state.generateDevice(username);

    await ig.account.login(username, password);
    await ig.publish.photo({
        file: photo,
        caption: description
    });
}

module.exports = { getImageBuffer, postToInsta };