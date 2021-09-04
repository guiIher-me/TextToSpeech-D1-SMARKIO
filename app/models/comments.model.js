module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define('comments', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});

	return Comment;
};