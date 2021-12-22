import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const UserToTeam = sequelize.define('users_teams', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.BOOLEAN, allowNull: false }
});

export default UserToTeam;
