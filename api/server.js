import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const PORT = process.env.PORT || 5000;

export default app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});