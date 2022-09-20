$(document).ready(function(){
        $("#card-title1").click(function(){
            $(".card-text1").toggle()
        })
        $("#card-title2").click(function(){
            $(".card-text2").toggle()
        })
        $("#card-title3").click(function(){
            $(".card-text3").toggle()
        })
        $("#card-title4").click(function(){
            $(".card-text4").toggle()
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