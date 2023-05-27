'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            User.belongsTo(models.Allcode, {
                foreignKey: 'address',
                targetKey: 'keyMap',
                as: 'addressData',
            });

            User.belongsTo(models.Allcode, {
                foreignKey: 'roleId',
                targetKey: 'keyMap',
                as: 'roleData',
            });

            User.belongsTo(models.Allcode, {
                foreignKey: 'gender',
                targetKey: 'keyMap',
                as: 'genderData',
            });
            User.hasMany(models.Oder, {
                foreignKey: 'userId',
                as: 'userData',
            });
            User.hasMany(models.Post, {
                foreignKey: 'userId',
                as: 'userDataPost',
            });
        }
    }
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            roleId: DataTypes.STRING,
            address: DataTypes.STRING,
            gender: DataTypes.STRING,
            avatar: DataTypes.TEXT('long'),
            uuid: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
