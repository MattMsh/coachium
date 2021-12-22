import matchService from '../services/matchService';

const createMatch = async (req, res) => {
  const { timeStart, timeFinish, judge, result } = req.body;
  const created = await matchService.createMatch({ timeStart, timeFinish, judge, result });
  return res.status(created.status).json(created);
}

export {
  createMatch
};
