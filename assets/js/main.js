$(document).ready(function(){
     /* Toggle de la sección quienes somos*/ 
        $("#icono1").click(function(){
            $("#texto1").toggle()
        })
        $("#icono2").click(function(){
            $("#texto2").toggle()
        })
        $("#icono3").click(function(){
            $("#texto3").toggle()
        })
        /* Alerta que aparece cuando el usuario ingresa los datos de contacto y presionar el botón enviar*/ 
        $("#enviar").click(function(){
            alert("Gracias por su mensaje, pronto será contactado");
        });
        
})

/* Tooltip del botón enviar*/ 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const carousel = new bootstrap.Carousel('#myCarousel')