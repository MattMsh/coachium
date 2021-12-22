import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const UserData = sequelize.define('users_data', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
});

export default UserData;
