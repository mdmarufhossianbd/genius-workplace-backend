# Genius WorkPlace Server Side

Welcome to the backend of Genius Workplace, a cutting-edge platform designed to revolutionize the way we collaborate and work. This repository contains the backend code built with Node.js and Express, providing robust and scalable services for the application.

# How can you run it in you local machine
  Must be have to installed nodejs in your machine before run this project.
- step 1
  ```
  git clone https://github.com/mdmarufhossianbd/genius-workplace-backend.git
  ```
- step 2
  ```
  npm install
  ```
- step 3
  ```
  npm run dev
  ```
- step 4 [ note : setup .env.local file. In the root folder of this project create a .env.local file.]
  ```
  VITE_APIKEY=FIREBASE_APIKEY
  VITE_AUTHDOMAIN=FIREBASE_AUTHDOMAIN
  VITE_PROJECTID=FIREBASE_PROJECTID
  VITE_STORAGEBUCKET=FIREBASE_STORAGEBUCKET
  VITE_MESSAGINGSENDERID=FIREBASE_MESSAGINGSENDERID
  VITE_APPID=FIREBASE_APPID
  VITE_IMAGE_HOSTING_KEY=FIREBASE_IMAGE_HOSTING_KEY
  ```
# Dependencies
- Node.js
- Express
- cors
- cookie-parser
- dotenv
- mongodb

# Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes. Before making any changes, please open an issue to discuss what you would like to contribute.

# License
This project is licensed under the MIT License. See the LICENSE file for details.
