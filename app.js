const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });