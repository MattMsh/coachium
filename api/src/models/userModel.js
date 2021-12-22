import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },
  dateBirth: { type: DataTypes.DATE, allowNull: false },
});

export default User;
