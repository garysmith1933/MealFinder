if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

  const app = require('./Server');
  const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });