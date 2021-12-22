import { Team, UserToTeam } from '../models';
import { userStatus } from '../constants';

const createTeam = async (name) => {
  try {
    return await Team.create({ name });
  } catch (err) {
    throw Error(err);
  }
}

const updateTeam = async (id, name) => {
  try {
    return await Team.update(
      { name }, 
      {
        where: { id }
      }
    );
  } catch (err) {
    throw Error(err);
  }
}

const addUsersToTeam = async (users, teamId) => {
  try {
    return await UserToTeam.bulkCreate(
      users.map(({ userId, roleId }) => {
        return {
          userId,
          teamId,
          roleId,
          status: userStatus.ACTIVE
        }
      })
    );
  } catch (err) {
    throw Error(err);
  }
}

export default {
  createTeam,
  updateTeam,
  addUsersToTeam
}