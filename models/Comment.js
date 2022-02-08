const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
    {
        // columns
},
{
    sequelize,
    freezeTableName: true,
    underscore: true,
    modelName: 'comment',
}
);

module.exports = Comment;