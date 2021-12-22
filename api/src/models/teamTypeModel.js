import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const TeamType = sequelize.define('team_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

export default TeamType;
