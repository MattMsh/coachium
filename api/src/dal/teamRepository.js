import { Team, UserToTeam, User, Role } from '../models';
import { userStatus } from '../constants';

const getAll = async () => {
  try {
    return await Team.findAll({
      include: [{
        model: UserToTeam,
        include: [{
          model: Role,
        }, {
          model: User,
        }]
      }]
    })
  } catch (e) {
    throw Error(e);
  }
}

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
    await Role.create({id: 1, name: 'Abrakadabra'})
    return await UserToTeam.bulkCreate(
      users.map(({ userId, roleId }) => {
          userId,
          teamId,
          roleId,
          status: userStatus.ACTIVE
        })
    );
  } catch (err) {
    throw Error(err);
  }
}

export default {
  getAll,
  createTeam,
  updateTeam,
  addUsersToTeam
}