'use strict';
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize

    class Todo extends Model {
        get status() {
            return this.status
        }

        get due_date() {
            return this.due_date
        }
    }

    Todo.init({
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        description: DataTypes.STRING,
        status: DataTypes.STRING,
        due_date: {
            type: DataTypes.DATE,
            validate: {
                checkdate() {
                    if (this.due_date < new Date()) throw new Error('Due date must not filled with the past date.')
                }
            }
        },
        UserId: DataTypes.INTEGER
    }, {
        hooks: {
            beforeCreate(todo, option) {
                todo.status = todo.status || 'Undone'
                todo.createdAt = new Date()
                todo.updatedAt = new Date()
            }
        },
        sequelize
    });


    Todo.associate = function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User)
    };
    return Todo;
};