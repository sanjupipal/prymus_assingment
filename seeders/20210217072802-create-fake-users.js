"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "test@gmail.com",
          uuid: "123e4567-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "Production",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "Doe",
          email: "test@gmail.com",
          uuid: "163e4567-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "ProductionPurchasing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "Johoe",
          email: "test@gmail.com",
          uuid: "123k4567-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "Marketing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "Jooe",
          email: "test@gmail.com",
          uuid: "123e4590-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "Production",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "JohD",
          email: "test@gmail.com",
          uuid: "123e4567-e89k-12d3-a456-426614174000",
          role: "dev",
          department: "Production",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "JoDoe",
          email: "test@gmail.com",
          uuid: "123e4597-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "ProductionPurchasing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "Je",
          email: "test@gmail.com",
          uuid: "123e4567-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "ProductionPurchasing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "JkDoe",
          email: "test@gmail.com",
          uuid: "123e4897-e89b-12d3-a456-426614174000",
          role: "dev",
          department: "ProductionPurchasing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "Jkoe",
          email: "test@gmail.com",
          uuid: "123e4897-e76h-12d3-a456-426614174000",
          role: "dev",
          department: "ProductionPurchasing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
        {
          name: "opue",
          email: "test@gmail.com",
          uuid: "123e4897-k89g-12d3-a456-426614174000",
          role: "dev",
          department: "ProductionPurchasing",
          createdAt: "2020-11-01",
          updatedAt: "2020-11-01",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
