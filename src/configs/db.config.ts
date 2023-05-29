import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("postgres", "postgres", "12345harsh@", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
