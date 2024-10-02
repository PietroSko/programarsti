$(document).ready(function(){

    $("input[name=cep]").mask("00000-000")

    $("form").on("submit", function(event){
        //interrompe oevento
        event.stopPropagation();
        //Previne o comportamento do navegador 
        //de enviar o form
        event.preventDefault();
        alert("teste");
    });

    $("input [name=cep]").on("change", function(event){

    })

})

