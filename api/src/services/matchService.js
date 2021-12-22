import matchRepository from '../dal/matchRepository';
import statusCode from 'http-status';

const createMatch = async (match) => {
    try {
        const matchResult = await matchRepository.createMatch(match);
        return {
            status: statusCode.OK,
            message: 'Match created!',
            matchResult
          }
    } catch (e) {
        throw new Error(e);
    }
}

export default {
    createMatch
}
