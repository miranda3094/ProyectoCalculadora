const contenedor = document.getElementById('contenedorCalculadora');
const pantalla = contenedor.querySelector('.pantalla');
const botones = contenedor.querySelectorAll('.botones button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonPresionado = boton.textContent;

        if (boton.id === "c") {
            pantalla.value = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.value.length === 1 || pantalla.value === "ERROR!") {
                pantalla.value = "0";
            } else {
                pantalla.value = pantalla.value.slice(0, -1);  //elimina el ultimo elemento
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const expresion = pantalla.value
                    .replace(/X/g, "*")
                    .replace(/,/g, ".")
                    .replace(/%/g, '/100');
                const resultado = eval(expresion);

                // Valida si el resultado no es finito o es NaN
                if (!isFinite(resultado) || isNaN(resultado)) {
                    pantalla.value = "ERROR!";
                } else {
                    pantalla.value = resultado;
                }
            } catch {
                pantalla.value = "ERROR!";
            }
            return;
        }

        if (pantalla.value === "0" || pantalla.value === "ERROR!") {
            pantalla.value = botonPresionado;
        } else {
            pantalla.value += botonPresionado;
        }
    });
});
