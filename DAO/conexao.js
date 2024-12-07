// Importando modulos
const mysql2 = require('mysql2');
const Sequelize = require('sequelize');

// Configuração da conexão com o banco de dados MySQL
const sequelize = new Sequelize('railway', 'root', 'oAOJnWCesZqqRJkmdUaSWCyYEGBfYZzJ', {
    // timestamps - retirada da criacao automatica das colunas createAt e updatedAt
    define: {
        timestamps: false,
    },
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql',
    dialectModule: mysql2,
    port: '45429'
})

// Verificacao da conexao com o banco de dados
sequelize.authenticate().then(() => {
    console.log('Conexão bem sucedida ao banco de dados MySQL');
}).catch((erro) => {
    console.error('Erro ao conectar ao banco de dados: ', erro);
})

// Exportando modulos
module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}