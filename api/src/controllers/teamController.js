import teamService from '../services/teamService';

const createTeam = async (req, res) => {
  const result = await teamService.createTeam(req.body.name);
  return res.status(result.status).json(result);
}

const updateTeam = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await teamService.updateTeam(id, name);
  return res.status(result.status).json(result);
}

const addUsers = async (req, res) => {
  const { users, teamId } = req.body;
  const result = await teamService.addUsers(users, teamId);
  return res.status(result.status).json(result);
}

export {
  createTeam,
  updateTeam,
  addUsers
};
