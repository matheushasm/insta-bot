const unsplash = require('../services/Unsplash');
const { getPhoto } = require('../services/Pexels');
const { createDescription } = require('../services/OpenAI');
const { getImageBuffer, postToInsta } = require('../services/Instagram');


const instaPost = async (
    account = {},
    photoQuery = '',
    descriptionQuery = '',
    hashTags = '',
) => {
    
    try {
       // Get Image
       //const photo = await unsplash.getPhoto(photoQuery);
       const photo = await getPhoto(photoQuery);

       // Generate Description
       const caption = await createDescription(`${descriptionQuery}  (${encodeURIComponent(photo)})`) + '\n\r' + hashTags ;
        
       // Download Image
       const imageBuffer = await getImageBuffer(photo);
        
       // Post on Instagram
       postToInsta(account, imageBuffer, caption);
        
   } catch (err) {
       console.error(err);
   }
}

module.exports = {
    instaPost
}