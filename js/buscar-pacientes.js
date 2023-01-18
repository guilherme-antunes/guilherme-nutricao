var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(typeof resposta); //mostra o tipo de resposta
            console.log(resposta);
            var pacientes = JSON.parse(resposta); // transforma o texto JS em Objetos JS
            console.log(pacientes);
            console.log(typeof pacientes);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });

        }else{
            console.log(xhr.status); //Diz se houve erro no console
            console.log(xhr.responseText); //qual o erro
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
    // envia a requisição acima
});