import { Sequelize } from 'sequelize';
import User from './user';
import Room from './room';
import Answer from './answer';

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
});

User.initModel(sequelize);
Room.initModel(sequelize);
Answer.initModel(sequelize);

sequelize.sync(); // Sync models with the database

export { sequelize, User, Room, Answer };