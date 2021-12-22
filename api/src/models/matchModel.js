import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Match = sequelize.define('matches', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.BOOLEAN, allowNull: false },
  datetime_start: { type: DataTypes.DATE, allowNull: false },
  datetime_finish: { type: DataTypes.DATE },
  judge: { type: DataTypes.STRING, allowNull: false},
  result: { type: DataTypes.STRING }
});

export default Match;
