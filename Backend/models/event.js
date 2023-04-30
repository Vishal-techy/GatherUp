module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define("event", {
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        userId: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        timings: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        venue: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        contact: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        contact: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },

        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
    })

    return event;
}