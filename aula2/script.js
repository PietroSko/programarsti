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
            $("#resultado1").append("<br>");

        });
    });

    $("#button2").on("click", function(event) {
        $.getJSON("./data2.json", function(data) {
            $("#resultado2").append(data.name + ", ");
            $("#resultado2").append(data.age + " anos");
            $("#resultado2").append("<br>");


            for(var i = 0; i < data.friends.length; i++){
                let friendName = data.friends[i].firstName + " " + data.friends[i].lastName;
                $("#resultado2").append("Amigo " + parseInt((i)+1) + ": " + friendName)
                $("#resultado2").append("<br>");

            }
            $("#resultado2").append(data.name + " tem " + data.friends.length + " amigos");
            $("#resultado2").append("<br>");
            $("#resultado2").append("<br>");

        });
    });

    $("#button3").on("click", function(event) {
        $.getJSON("./data3.json", function(data) {
            for (var i in data.results){
                $("#resultado3").append(data.results[i].gender);
                $("#resultado3").append(data.results[i].name.first);
                $("#resultado3").append(data.results[i].email);
            }
            $("#resultado3").append(data.info.seed);
        });
    });

    $("#Limpar").on("click", function(event) {
        $("[id^=resultado]").empty();
    });
})
