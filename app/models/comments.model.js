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
		},
		hash: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
    	timestamps: true,
		createdAt: true,
		updatedAt: false
	});

	return Comment;
};