const axios = require('axios');

const postCode = async (req, res) => {
  const code = req.body.code;

  res = await fetch('/api/code', {
    method: 'POST',
    body: JSON.stringify({
      code: code
    }),
  });
  console.log(res.json())
};

const getUser = async () => {
  try {
    const response = await axios.get('/api/code');
    const users = response.data;
    console.log(users);
  } catch (error) {
    // console.error(error);
  }
};

module.exports = {getUser, postCode}