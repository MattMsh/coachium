import statusCode from 'http-status';
import userService from '../services/userService';

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.loginUser(email, password);
    return res.status(result.status).json(result);
}

const auth = (req, res) => {
  res.status(statusCode.OK).json({
    success: true, message: 'Success! You are authorized!.',
  });
};

const createUser = async (req, res) => {
  const {
    firstName, lastName, gender, dateBirth, email, password
  } = req.body;
  const result = await userService.createUser({
    userData: {
      firstName,
      lastName,
      gender,
      dateBirth
    },
    credentials: {
      email,
      password
    }
  });
  return res.status(result.status).json(result);
}

const updateUser = async (req, res) => {
  const {
    firstName, lastName, gender, dateBirth, email,
  } = req.body;
  const result = await userService.updateUser({
    firstName,
    lastName,
    gender,
    dateBirth,
    email
  });
  return res.status(result.status).json(result);
}

export {
  loginUser,
  createUser,
  updateUser,
  auth,
};
