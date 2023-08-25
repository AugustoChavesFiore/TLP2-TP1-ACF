import { sequelize } from "../database.js";


export const proyects=sequelize.define('Proyect',{
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
        type:DataTypes.STRING,
        allowNull:false
    },
    taskId:{
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
    tableName: 'proyects'}

);

proyects.sync({force:false} ).then(()=>{
    console.log('Tabla de proyects creada');
})