import { sequelize } from "../database.js";
import { DataTypes } from "sequelize";

export const Proyects=sequelize.define('Proyect',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},
{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'proyects'}

);

Proyects.sync({force:false} ).then(()=>{
    console.log('Tabla de proyects creada');
})