# Insta-Bot

## Description
Insta-Bot is a versatile Node.js project that not only automates interactions on Instagram but also provides an automatic posting service. With Insta-Bot, you can choose a theme for your posts, and it will handle the rest. It searches for a relevant photo based on the theme from Unsplash or Pexels, generates a captivating description using ChatGPT, and schedules the post at specified days and times using the cron-job located in index.js.<br/><br/>

## Features
### Insta-Bot offers the following features: <br/>

<b>Automatic Posting:</b> The bot automates the process of creating and publishing posts on Instagram. You only need to select a theme, and Insta-Bot takes care of finding an appropriate photo, generating a compelling description, and scheduling the post. <br/><br/>

## Requirements
Make sure you have the following requirements installed in your environment:

`Node.js (version 12 or higher)`

`NPM or Yarn`

`OpenAI API Keys (for language model integration)`

`Unsplash or Pexels API Keys (for obtaining images)`<br/><br/>

## Configuration
### Clone this repository:

    git clone https://github.com/matheushasm/insta-bot.git

### Access the project directory:

    cd insta-bot

### Install dependencies:

    npm install

    or

    yarn install
<br/><br/>

## Add .env file
Configure the API Keys, Instagram username, and password in the .env file. Make sure to keep this file secure and not share the authentication information.

Configure the bot options in the files located in ./app/http/controller. Here, you can define the criteria for the desired interactions.<br/><br/>

# Usage

## To start the system, run the following command:


    npm start

    or

    yarn start

The bot will begin automating interactions based on the provided configuration in the controller files.<br/><br/>

# Disclaimer
It is important to use Insta-Bot responsibly. Excessive or abusive use of automation may violate Instagram's terms of service and result in the blocking or suspension of your account. Make sure to configure the bot according to Instagram's guidelines and use it in moderation.<br/><br/>

# Contribution
If you would like to contribute to this project, feel free to open a pull request. We welcome suggestions for improvements and new features.

License
This project is licensed under the MIT License.