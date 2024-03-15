const form = document.getElementById("mensagem");

function validaCampo(Campos) {
    const campoComoArray = Campos.split(' ');
    return campoComoArray.length > campoA;
}
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos A e B
    const campoA = parseInt(document.getElementById("campoA").value);
    const campoB = parseInt(document.getElementById("campoB").value);

    // Verifica se o campo B é maior que o campo A
    if (campoB > campoA) {
        // Se for válido, exibe uma mensagem positiva
        document.getElementById("mensagem").textContent = "Formulário válido: B é maior que A.";
        document.getElementById("mensagem").classList.remove("invalido");
        document.getElementById("mensagem").classList.add("valido");
        document.getElementById("mensagem").style.color = "green";
    } else {
        // Se for inválido, exibe uma mensagem negativa
        document.getElementById("mensagem").textContent = "Formulário inválido: B deve ser maior que A.";
        document.getElementById("mensagem").classList.remove("valido");
        document.getElementById("mensagem").classList.add("invalido");
        document.getElementById("mensagem").style.color = "red";
    }
});