        // JavaScript para mostrar u ocultar el formulario al hacer clic en el botón
        const botonMostrarOcultarFormulario = document.getElementById("mostrarOcultarFormulario");
        const formularioPQRS = document.getElementById("formularioPQRS");

        botonMostrarOcultarFormulario.addEventListener("click", () => {
            if (formularioPQRS.style.display === "none" || formularioPQRS.style.display === "") {
                formularioPQRS.style.display = "block";
                botonMostrarOcultarFormulario.textContent = "Ocultar ";
            } else {
                formularioPQRS.style.display = "none";
                botonMostrarOcultarFormulario.textContent = "Mostrar ";
            }
        });

// JavaScript para mostrar el pop-up después de enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    const pqrsForm = document.getElementById('pqrsForm');
    const popup = document.getElementById('popup');

    // Agrega un manejador de eventos al formulario para interceptar su envío
    pqrsForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío predeterminado del formulario

        // Muestra el pop-up
        popup.style.display = 'block';

        // Simula un retraso (puedes eliminar esto o ajustar el tiempo)
        setTimeout(function() {
            // Envía el formulario después del retraso
            pqrsForm.submit();
        }, 2500); // 2500 milisegundos (2.5 segundos) de retraso antes de enviar el formulario
    });
});


let piripiri = "https://music.youtube.com/watch?v=VyZiIuMufTA&si=ZSR3cbFJoIa3addk"
