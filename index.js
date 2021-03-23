const { Sequelize } = require('sequelize');

const dbName = '';
const dbUser = '';
const dbPassword = '';
const dbHost = '';
const dbPort = '';

const seqConfig = {
  dialect: 'postgres',
  host: dbHost,
  port: dbPort,
  logging: false,
};

const test = async () => {
  const sequelize = new Sequelize(dbName, dbUser, dbPassword, seqConfig);

  await sequelize.authenticate()
    .catch(e=>console.log(e));

  const [res, Result]= await sequelize.query("Select * from encounters limit 1");
  console.log(res);
}

test();
// Need to pres ctrl-C to stop this