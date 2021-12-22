import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const MatchParticipant = sequelize.define('matches_participants', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export default MatchParticipant;
