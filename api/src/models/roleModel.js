import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Role = sequelize.define('roles', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

export default Role;
