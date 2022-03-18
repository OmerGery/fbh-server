const getModel = require('../../services/firebase-api/get');
const addData = require('../../services/firebase-api/add');
const { uuid } = require('short-uuid');

const modelName = 'users';
const findByName = async (userName) => {
  const userModel = await getModel(modelName);
  console.log('try find user');
  console.log(userModel);
  let relevantUser = null;
  for (let key in userModel) {
      if (userModel[key].userName === userName) {
          foundUser = userModel[key];
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
module.exports = { findByName, findById, addUser };
