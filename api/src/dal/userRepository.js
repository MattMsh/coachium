import { User, UserData } from '../models';

const loginUser = async (email) => {
  try {
    const user = await UserData.findOne({
      where: { email },
      include: [{
        model: User,
      }]
  });
    return user;
  } catch (err) {
      throw Error(err);
  }
}

const createUser = async (userData, { email, password }) => {
  try {
    const user = await User.create(userData);
    const userInfo = await UserData.create({ userId: user.id, email, password });
    return { ...user.dataValues, email: userInfo.email };
  } catch (err) {
      throw Error(err);
  }
}

const updateUser = async (credentials) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      dateBirth,
      email
    } = credentials;
    const foundUser = await UserData.findOne({ where: { email } });
    await User.update({
      firstName,
      lastName,
      gender,
      dateBirth
    }, {
      where: {
        id: foundUser.id
      }
    });

    return {
      firstName,
      lastName,
      gender,
      dateBirth,
      email
    };
  } catch (err) {
    throw Error(err);
  }
}

export default {
  createUser,
  updateUser,
  loginUser
}