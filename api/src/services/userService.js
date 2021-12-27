import jwt from 'jsonwebtoken';
import statusCode from 'http-status';
import userRepository from '../dal/userRepository';

const loginUser = async (email, password) => {
    const user = await userRepository.loginUser(email);
    if (!user) {
      return {
        status: statusCode.OK,
        message: 'User not found',
        response: null
      }
    }
    return {
      status: statusCode.OK,
      message: 'Success!',
      response: user
    }
    // if (!user) {
    //   return {
    //     status: statusCode.UNAUTHORIZED,
    //     message: 'Authentication failed. User not found',
    //   };
    //   }
    // if (user.password === password) {
    //   const payload = { id: user.id };
    //   const token = jwt.sign(payload, process.env.SECRET_KEY);
    //   return {
    //     status: statusCode.OK,
    //     message: 'Success!',
    //     user,
    //     token,
    //   };
    // }
    // return {
    //     status: statusCode.UNAUTHORIZED,
    //     message: 'Password is incorrect',
    //   };
}

const createUser = async ({ userData, credentials }) => {
  try {
    const user = await userRepository.createUser(userData, credentials);
    return {
      status: statusCode.OK,
      message: 'SUCCESS!',
      user
    }
  } catch (err) {
    console.log(err);
    return {
      status: statusCode.BAD_REQUEST,
      message: 'Creating data failed'
    }
  }
}

const updateUser = async (credentials) => {
  try {
    const user = await userRepository.updateUser(credentials);
    return {
      status: statusCode.OK,
      message: 'SUCCESS!',
      user
    }
  } catch (err) {
    console.log(err);
    return {
      status: statusCode.BAD_REQUEST,
      message: 'Creating data failed'
    }
  }
}

export default {
  loginUser,
  createUser,
  updateUser
}
