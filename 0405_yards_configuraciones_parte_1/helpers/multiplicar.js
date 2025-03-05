//funcion de fileSystem importada
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async (base = 1, listar = false) => {
    try{
      if(listar){
          console.log('========================');
          console.log(` Tabla del: ${base}`);
          console.log('========================');
      }    
      let salida = '';
      for(let i=1; i<=10; i++){
        salida += `${base} x ${i} = ${ base * i }\n`;    
      }
      if(listar){
        console.log(salida);   
      }      
      fs.writeFileSync(`tabla-${base}.txt`, salida);      
      return `tabla-${base}.txt`;    
    }catch(err){
        throw err;
    }
}

module.exports = {  
  crearArchivo
}