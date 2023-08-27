import {usuarios} from './user.model.js'; 
import {Proyects} from './proyects.model.js';
import {tasks} from './task.model.js';

export const relationships = ()=>{
  usuarios.hasMany(Proyects,{
    foreignKey: 'userId'
  });

  Proyects.belongsTo(usuarios ,{
      foreignKey: 'userId'
    });

  Proyects.hasMany(tasks, {
    foreignKey: 'proyectTitleId'
  });
  tasks.belongsTo(Proyects,{
    foreignKey: 'proyectTitleId'
  });
      
      
    
}
