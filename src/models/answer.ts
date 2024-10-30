import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Answer extends Model {
    static initModel(sequelize: Sequelize) {
        Answer.init({
            room_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            content: DataTypes.TEXT,
        }, { sequelize });
    }
}