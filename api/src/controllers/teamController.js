import teamService from '../services/teamService';

const getAll = async (req, res) => {
  const result = await teamService.getAll(req.body);
  const data = result.teams.map(team => {
    return {
      id: team.id,
      name: team.name,
      users: team.users_teams.map(row => {
        return {
          id: row.user.id,
          firstName: row.user.firstName,
          lastName: row.user.lastName,
          gender: row.user.gender,
          role: row.role.name
        }
      })
    }
  })
  return res.status(result.status).json(data);
}

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
  getAll,
  createTeam,
  updateTeam,
  addUsers
};
