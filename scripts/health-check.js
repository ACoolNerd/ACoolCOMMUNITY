const axios = require('axios');
const port = process.env.PORT || 3000;

axios.get(`http://localhost:${port}/health`)
  .then(res => {
    console.log('Health check passed:', res.data);
    process.exit(0);
  })
  .catch(err => {
    console.error('Health check failed:', err.message);
    process.exit(1);
  });
