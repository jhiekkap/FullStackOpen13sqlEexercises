const { DataTypes } = require('sequelize')

module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.addColumn('readinglists', 'read', {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        })
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.removeColumn('readinglists', 'read')
    },
}