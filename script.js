(function(){

    const desplegables = document.querySelectorAll("details");
    desplegables.forEach(desplegable => {
        desplegable.addEventListener("toggle", manejarToggle)
    })

    function manejarToggle(e) {
        const activo = e.currentTarget;

        if (activo.open) {
            desplegables.forEach(desplegable => {
                if (desplegable !== activo) {
                    desplegable.open = false;
                    desplegable.classList.remove("desplegable-abierto");
                }
            });
            activo.classList.add("desplegable-abierto");
        } else {
            activo.classList.remove("desplegable-abierto");
        }
    }
})()