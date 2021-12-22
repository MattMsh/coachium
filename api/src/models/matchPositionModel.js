import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const MatchPosition = sequelize.define('match_positions', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
});

export default MatchPosition;