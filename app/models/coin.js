module.exports = (sequelize, DataTypes) => {
  const Coin = sequelize.define(
    'Coin',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      deleted_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'coins',
      underscored: true,
      paranoid: true
    }
  );

  return Coin;
};
