const GatitoNombre = [];

const nombreDeGato = (nombre, porciones) => {
    GatitoNombre.push({
        nombre,
        porciones
    });
};

const nombreGatos = () => {
    const NombreGatitos = GatitoNombre.map(gatito => gatito.nombre);
    return NombreGatitos;
};

const cambiarNombre = () => {
    if (GatitoNombre.length < 1) {
        alert("No hay gatitos");
    } else {
        const NombreGatitos = nombreGatos();
        console.log(NombreGatitos);
        
        const i = Number(prompt("Elige el índice del gato que quieres renombrar (0 para el primero):"));
        if (i >= 0 && i < GatitoNombre.length) {
            const nuevoNombre = prompt("Introduce el nuevo nombre para el gato:");
            GatitoNombre[i].nombre = nuevoNombre;
            console.log("Nombre cambiado a:", nuevoNombre);
        } else {
            alert("Índice no válido");
        }
    }
};

const sistems = () => {
    let bandera = true;

    while (bandera) {
        let gatitos = Number(prompt('Veterinaria de gatitos\nElige el gatito que más te guste para darle alimento:\n1- Gato blanco\n2- Gato Anaranjado\n3- Gato negro\n4- Gato bicolor\n5- Gato premium\n6- Cambiar nombre'));

        switch (gatitos) {
            case 1:
            case 2:
            case 3:
            case 4:
                const nombre = prompt(`Usted escogió a su gato ${["blanco", "anaranjado", "negro", "bicolor"][gatitos - 1]}\n¿Cómo quiere nombrar a su gato?`);
                let porciones;
                do {
                    porciones = Number(prompt(`¿Cuántas porciones desea darle a ${nombre}?`));
                }
                 while (isNaN(porciones) || porciones <= 0);
                nombreDeGato(nombre, porciones);
                break;
            case 5:
                alert("Usted escogió a su gato premium\nEste gato ya tiene nombre");
                break;
            case 6:
                cambiarNombre();
                break;
            default:
                alert("Podrías salvar un gatito");
                bandera = confirm("¿Quieres intentarlo?");
                if (!bandera) {
                    alert("Los gatitos están tristes");
                }
        }
        bandera = confirm("¿Volver?");
    }
};

sistems();