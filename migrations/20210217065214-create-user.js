"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "User must have a name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isEmail: { mag: "Must be a valid email" },
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "User must have a role" },
          notEmpty: { msg: "role must not be empty" },
        },
      },
      department: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "User must have a department" },
          notEmpty: { msg: "Department Name must not be empty" },
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("users");
  },
};
