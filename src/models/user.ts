import { Model, DataTypes, Sequelize } from 'sequelize';

export default class User extends Model {
    static initModel(sequelize: Sequelize) {
        User.init({
            canvas_id: { type: DataTypes.INTEGER, unique: true },
            name: DataTypes.STRING,
            role: DataTypes.STRING,
        }, { sequelize });
    }
}