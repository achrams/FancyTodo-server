'use strict';
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize
    const { encryptPassword } = require('../helpers/bcrypt')
    class User extends Model {}

    User.init({
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,

            validate: {
                notEmpty: true
            }
        }
    }, {
        hooks: {
            beforeCreate: (user, options) => {
                user.password = encryptPassword(user.password);
            }
        },
        sequelize
    });
    User.associate = function(models) {
        User.hasMany(models.Todo)
    };
    return User;
};