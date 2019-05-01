module.exports = function(sequelize, DataTypes) {
    let Account = sequelize.define("Account", {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Account.associate = function(models) {
        Account.hasMany(models.Trip, {});
    };
    return Account;
};
