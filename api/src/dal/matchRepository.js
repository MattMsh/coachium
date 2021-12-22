import { Match } from "../models";
import { matchStatus } from '../constants';

const createMatch = async ({ timeStart, timeFinish, judge, result }) => {
    try {
        return await Match.create({
            datetime_start: timeStart,
            datetime_finish: timeFinish,
            judge,
            result,
            status: matchStatus.NEW
        });
    } catch (e) {
        throw new Error(e);
    } 
}

export default {
    createMatch
}