require('dotenv').config();
const { initializeApp } = require('firebase/app');

const FIRE_BASE_CONFIG = JSON.parse(process.env.FIRE_BASE);
console.log(FIRE_BASE_CONFIG);
const firebaseConfig = FIRE_BASE_CONFIG;
const app = initializeApp(firebaseConfig);
module.exports = app;
