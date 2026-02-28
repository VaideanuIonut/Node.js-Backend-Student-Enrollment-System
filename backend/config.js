const { Sequelize, DataTypes } = require("sequelize");

 const database = new Sequelize("studenti_inscrisi", "root", "", {
  dialect: "sqlite",
  storage: "./db.sqlite",
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
  },
});

const studenti_inscrisi = database.define ("studenti_inscrisi", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Nume_Complet: {
        type: DataTypes.STRING,
        allowNull:false,
    }, 
    Nr_telefon: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    eMAIL: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    Universitate: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    Facultate: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    An_de_Studiu: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
  },
  {
    freezeTableName: true,
});


module.exports = {
    database,
    studenti_inscrisi,
};
