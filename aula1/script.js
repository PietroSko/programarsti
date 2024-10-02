$(document).ready(function(){
    
    $("input[name=cep]").mask("00000-000")
    
    $("form").on("submit", function(event){
        //interrompe o evento
        event.stopPropagation();
        //Previne o comportamento do navegador 
        //de enviar o form
        event.preventDefault();
        alert("teste");
    });
    
    $("input[name=cep]").on("keyup", function(event){
        $("input[name=cep]").removeClass("is-invalid");
        
        
        let cep = $("input[name=cep]").val();
        cep = cep.replace("-", "");
        if(cep.length == 8) {
            $("input[name=cep]").removeClass("is-invalid");
            
            $.ajax("https://viacep.com.br/ws/" + cep + "/json")
            .done(function (data){
                let resposta = JSON.parse(data);
                if (resposta.erro){
                    $("input[name=cep]").addClass("is-invalid");
                    return; // sai da função
                }
                $("input[name=rua]").val(resposta.logradouro);
                $("input[name=complemento]").val(resposta.complemento);
                $("input[name=bairro]").val(resposta.bairro);
                $("select[name=estado]").children().filter(function(){
                    return this.text == resposta.estado;
                }).prop('selected', true);

            });
        }
    });
});


$(document).ready(function() {
    const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    // Carregar os estados na inicialização
    $.getJSON(urlEstados, function(data) {
        data.sort(function(a, b) {
            return a.nome.localeCompare(b.nome);
        });

        data.forEach(function(estado) {
            $('#estado').append(`<option value="${estado.id}">${estado.nome}</option>`);
        });
    });

    // Carregar cidades com base no estado selecionado
    $('#estado').on('change', function() {
        let estadoId = $(this).val(); // Pega o ID do estado selecionado

        if (estadoId) {
            const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`;

            $.getJSON(urlCidades, function(data) {
                $('#cidade').empty(); // Limpa o select de cidades
                $('#cidade').append(`<option value="">Selecione a cidade</option>`); // Adiciona a opção padrão

                data.sort(function(a, b) {
                    return a.nome.localeCompare(b.nome);
                });

                data.forEach(function(cidade) {
                    $('#cidade').append(`<option value="${cidade.id}">${cidade.nome}</option>`);
                });
            });
        } else {
            $('#cidade').empty(); // Limpa o select de cidades caso não haja estado selecionado
            $('#cidade').append(`<option value="">Primeiro selecione o estado</option>`);
        }
    });
});
