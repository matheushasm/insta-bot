require('dotenv').config();
const cron = require('node-cron');
const { instaPost } = require('./app/http/controller/InstaBotController');

const accounts = {
    yourInstagramAccount_1: {
        username: process.env.FIRST_INSTAGRAM_USERNAME,
        password: process.env.FIRST_INSTAGRAM_PASSWORD,
    },
    yourInstagramAccount_2: {
        username: process.env.SECOND_INSTAGRAM_USERNAME,
        password: process.env.SECOND_INSTAGRAM_PASSWORD,
    }
};


cron.schedule(' * * * * * * ', () => {

    instaPost( 
        accounts.yourInstagramAccount_1,
        'Photo Query here', 
        'Description query here', 
        'Hashtags post here',
    );

    instaPost( 
        accounts.yourInstagramAccount_2,
        'Photo Query here', 
        'Description query here', 
        'Hashtags post here',    
    );
})