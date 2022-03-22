module.exports = (sequelize, DataTypes) => {
  const Coin = sequelize.define(
    'Coin',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      coinExternalId: {
        type: DataTypes.STRING,
        field: 'coin_external_id'
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
