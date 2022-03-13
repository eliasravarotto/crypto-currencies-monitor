module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: DataTypes.STRING,
      bio: DataTypes.TEXT,
      resetPasswordToken: {
        type: DataTypes.STRING,
        field: 'reset_password_token'
      },
      resetPasswordSentAt: {
        type: DataTypes.DATE,
        field: 'reset_password_sent_at'
      },
      rememberCreatedAt: {
        type: DataTypes.DATE,
        field: 'remember_created_at'
      },
      signInCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field: 'sign_in_count'
      },
      currentSignInAt: {
        type: DataTypes.DATE,
        field: 'current_sign_in_at'
      },
      lastSignInAt: {
        type: DataTypes.DATE,
        field: 'last_sign_in_at'
      },
      currentSignInIp: {
        type: DataTypes.STRING,
        field: 'current_sign_in_ip'
      },
      lastSignInIp: {
        type: DataTypes.STRING,
        field: 'last_sign_in_ip'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {
      tableName: 'users',
      underscored: true,
      paranoid: true
    }
  );

  User.associate = models => {
    User.hasMany(models.Coin, { foreignKey: 'userId' });
  };

  return User;
};
