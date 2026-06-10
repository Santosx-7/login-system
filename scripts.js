function alertaLogin() { 

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");   

    const valor_email = email.value;
    const valor_senha = senha.value;

    if (valor_email === "" || valor_senha === ""){
        alert("Login não efetuado. Algum dos campos está vazio")
    } else {
        alert("Login realizado com sucesso!");

        email.value = ""
        senha.value = ""
    }


}
