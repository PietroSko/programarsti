$(document).ready(function() {
    $("#button1").on("click", function(event) {
        $.getJSON("./data.json", function(data) {
            $("#resultado1").append(data.name + ", ");
            $("#resultado1").append(data.age + " anos");
            $("#resultado1").append("<br>");
            $("#resultado1").append("Carros:");

            $("#resultado1").append("<br>");

            for(var i in data.cars){
                $("#resultado1").append(data.cars[i])
                $("#resultado1").append("<br>");

            }
        });
    });



    $("#Limpar").on("click", function(event) {
        $("[id^=resultado]").empty();
    });
});
