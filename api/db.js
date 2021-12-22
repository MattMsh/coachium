import { Sequelize } from 'sequelize';

export default new Sequelize(
    'coachium',
    'postgres',
    'postgres',
    {
        dialect: 'postgres',
        host: 'localhost'
    },
)
