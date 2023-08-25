import { sequelize } from "../database.js";
import DataTypes from 'sequelize';

export const taks=sequelize.define('Task',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    proyectTitleId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    task:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
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
    tableName: 'Taks'}

);


taks.sync({force:true}).then(()=>{
    console.log('Tabla de tareas creada');

})