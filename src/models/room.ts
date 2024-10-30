import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Room extends Model {
    static initModel(sequelize: Sequelize) {
        Room.init({
            course_id: DataTypes.INTEGER,
            created_by: DataTypes.INTEGER,
        }, { sequelize });
    }
}