import express from 'express';
import cors from 'cors';
import passport from 'passport';
import router from './src/routes';
import sequelize from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true });
  } catch (e) {
    console.error('Unable to connect to the database:', e);
  }
};

start();

export default app;
