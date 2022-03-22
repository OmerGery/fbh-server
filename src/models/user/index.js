const { uuid } = require('short-uuid');
const getModel = require('../../services/firebase-api/get');
const addData = require('../../services/firebase-api/add');
const validator = require("email-validator");


const modelName = 'users';
const validateUserData = (data) => {
  const email  = data.email;
  if (!email) {
    throw new Error('email must be provided');
  }
  validateEmail(email);
};

const validateEmail = (email) => {
if (!validator.validate(email)) {
  throw new Error('Email is not valid');
  }
};
const findByName = async (userName) => {
  const userModel = await getModel(modelName);
  console.log('try find user');
  let relevantUser = null;
  for (const key in userModel) {
    if (userModel[key].userName === userName) {
      relevantUser = userModel[key];
      break;
    }
  }
  if (!relevantUser) {
    console.log('user not found');
    return null;
  }
  return relevantUser;
};
const findById = async (index) => {
  console.log('getting model from db');
  const userModel = await getModel(modelName);
  const relevantUser = userModel[index];
  if (!relevantUser) {
    console.log('user not found');
    return null;
  }
  return relevantUser;
};
const addUser = async (data) => {
  console.log('adding user to db');
  const generatedId = uuid();
  await addData(modelName, data, generatedId);
  return generatedId;
};
module.exports = {
  findByName,
  findById,
  addUser,
  validateUserData,
};
