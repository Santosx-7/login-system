function alertaLogin() {
    alert("Login realizado com sucesso!");

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");   

    const valor_email = email.value;
    const valor_senha = senha.value;

    email.value = "";
    senha.value = "";
}