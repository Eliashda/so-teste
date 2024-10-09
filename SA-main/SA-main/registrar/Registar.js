
function redirecionarParaOutraPagina(){
    window.location.href = "../entrar/entrar.html"
}


function signUp(){
    const user = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password01 = document.getElementById('password01').value;
    const textCerto = document.getElementById('certo')
    const textErro = document.getElementById('erro')

    const data = [{
        username: user,
        key: password
    }]

    if(!user || !password || !password){
        textErro.innerHTML ="Por favor, preencha todos os campos.";
        textCerto.innerHTML = " ";
    }else if(password != password01){
        textErro.innerHTML ="As senhas devem ser iguais";
        textCerto.innerHTML = " ";
    }else{
    localStorage.setItem("username",user);
    localStorage.setItem("key",password);
    textErro.innerHTML =" ";
    textCerto.innerHTML = "Cadastro feito com sucesso";

    redirecionarParaOutraPagina();
    }
}

console.log("oi")
