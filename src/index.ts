import express from 'express';
import sequelize from './configs/db.config';
import userRoutes from './routes/user.route';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);

app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
