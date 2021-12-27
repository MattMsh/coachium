import statusCode from 'http-status';
import teamRepository from '../dal/teamRepository';

const getAll = async () => {
  const teams = await teamRepository.getAll();
  return {
    status: statusCode.OK,
    message: 'All teams',
    teams
  }
}

const createTeam = async (name) => {
  try {
    const team = await teamRepository.createTeam(name);
    return {
      status: statusCode.OK,
      message: 'SUCCESS!',
      team
    }
  } catch (err) {
    throw new Error(err);
  }
}

const updateTeam = async (id, name) => {
  try {
    const team = await teamRepository.updateTeam(id, name);
    return {
      status: statusCode.OK,
      message: 'SUCCESS!',
      team
    }
  } catch (err) {
    throw new Error(err);
  }
}

const addUsers = async (users, teamId) => {
  try {
    const resultUsers = await teamRepository.addUsersToTeam(users, teamId);
    return {
      status: statusCode.OK,
      message: 'SUCCESS!',
      resultUsers
    }
  } catch (e) {
    throw new Error(e);
  }
}

export default {
  getAll,
  createTeam,
  updateTeam,
  addUsers
}
