document.addEventListener("DOMContentLoaded", () => {
    // Comprobar si estamos en la página de inicio o en la página de resultados
    const isIndexPage = document.getElementById("lista-profesores") !== null;

    if (isIndexPage) {
        // Código para la página de inicio
        const listaProfesores = document.getElementById("lista-profesores");
        const listaObservadores = document.getElementById("lista-observadores");
        const siguienteBtn = document.getElementById("siguiente-btn");

        for (let i = 1; i <= 10; i++) {
            const profesor = document.createElement("option");
            profesor.textContent = `Profesor ${i}`;
            profesor.value = `profesor${i}`;
            listaProfesores.appendChild(profesor);

            const observador = document.createElement("option");
            observador.textContent = `Observador ${i}`;
            observador.value = `observador${i}`;
            listaObservadores.appendChild(observador);
        }

        siguienteBtn.addEventListener("click", () => {
            const observadorSeleccionado = listaObservadores.options[listaObservadores.selectedIndex].text;
            const profesorSeleccionado = listaProfesores.options[listaProfesores.selectedIndex].text;

            if (observadorSeleccionado !== "Seleccione un observador" && profesorSeleccionado !== "Seleccione un profesor") {
                localStorage.setItem("observadorSeleccionado", observadorSeleccionado);
                localStorage.setItem("profesorSeleccionado", profesorSeleccionado);
                window.location.href = "resultados.html";
            } else {
                alert("Por favor, seleccione un observador y un profesor.");
            }
        });
    } else {
        // Código para la página 2 
        const observadorSeleccionadoDiv = document.getElementById("observador-seleccionado");
        const profesorSeleccionadoDiv = document.getElementById("profesor-seleccionado");
        const guardarBtn = document.getElementById("guardar-btn");

        const observadorSeleccionado = localStorage.getItem("observadorSeleccionado");
        const profesorSeleccionado = localStorage.getItem("profesorSeleccionado");

        observadorSeleccionadoDiv.textContent = `Observador seleccionado: ${observadorSeleccionado}`;
        profes


