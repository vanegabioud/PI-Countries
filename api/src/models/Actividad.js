const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
  sequelize.define('actividad', {
    nombre:{
      type: DataTypes.STRING,
    },
    dificultad:{
        type: DataTypes.INTEGER,
        validate:{
            min:1,max:5
        }
    },
    duracion: {
        type: DataTypes.FLOAT,
    },
    temporada:{
        type: DataTypes.ENUM("verano","invierno","otoño","primavera"),
    },

}, {
    timestamps: false,
})
}