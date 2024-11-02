
const GatitoNombre = []

const nombreDeGato = (nombre, porciones) => {
    GatitoNombre.push({
        nombre,
        porciones   
    })
}


    let gatitos = Number(prompt('Veterinaria de gatitos\n Elige el gatito que mas te guste para darle alimento:\n 1- Gato blanco\n 2- Gato Anaranjado\n 3- Gato negro\n 4- Gato bicolor\n 5- Gato premium'))
      let bandera = true

    while(bandera)  
        switch(gatitos){
            case 1:
                 let nombre = prompt("Usted escogio a su gato blanco\n ¿como quiere nombrar a su gato")
                 let porciones = Number(prompt("cuantas porciones desea darle a" + ' ' +nombre))    
            nombreDeGato(nombre, porciones)

            bandera = confirm("volver?")
        break
            case 2:  
                nombre = prompt("Usted escogio a su gato blanco\n ¿como quiere nombrar a su gato")
               
                porciones = Number(prompt("cuantas porciones desea darle a" + ' ' +nombre))    
            nombreDeGato(nombre, porciones)
        break
            case 3:
                nombre = prompt("Usted escogio a su gato blanco\n ¿como quiere nombrar a su gato")
               
                porciones = Number(prompt("cuantas porciones desea darle a" + ' ' +nombre))    
            nombreDeGato(nombre, porciones)
        break
            case 4:
                nombre = prompt("Usted escogio a su gato blanco\n ¿como quiere nombrar a su gato")
               
                porciones = Number(prompt("cuantas porciones desea darle a" + ' ' +nombre))    
            nombreDeGato(nombre, porciones)
        break
            case 5:
                nombre = prompt("Usted escogio a su gato premium\n Este gato ya tiene nombre") 

                Bandera = confirm("No necesita ser alimentado")
        break
    default:
            alert("podrias salvar un gatito")
                bandera = confirm("¿quieres intentarlo?")
                if (!bandera){
                    alert("Los gatitos gatitos estan tristes")
                }
                gatitos = Number(prompt(" Veterinaria de gatitos\n Elige el gatito que mas te guste para darle alimento:\n 1- Gato blanco\n 2- Gato Anaranjado\n 3- Gato negro\n 4- Gato bicolor\n 5- Gato premium"))  
    }

sistems ()