const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'country',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate:{ //valido que el id sea de 3 digitos
          esDe(valor){
            if(valor.length !== 3){
              throw new Error("El id debe ser de 3 digitos")
            }
          }
        }
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bandera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.FLOAT,
      },
      poblacion: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
