const mysql = require('mysql2/promise');

const connectToMySql = async () => {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const config = {
        host: "localhost",
        user: "root",
        password: "juizladrao_1994",
        database: "tech_academy_universaty"
    }

    const connection = await mysql.createConnection(config);
    console.log("Conexão realizada com sucesso");
    global.connection = connection;
}

connectToMySql();

module.exports = { connectToMySql };