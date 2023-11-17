const axios = require('axios');

const postCode = async (code) => {
  try {
    const response = await axios.post('/api/code', {code: code});
    return response.data
  } catch (error) {
    console.error(error);
  }
}

const getUser = async () => {
  try {
    const response = await axios.get('/api/code');

    return response.data
  } catch (error) {
    console.error(error);
  }
};

module.exports = {getUser, postCode}