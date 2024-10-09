
function entrar(){
    const name = localStorage.getItem('username')
    const password = localStorage.getItem('key')
    const user = document.getElementById('email').value;
    const key = document.getElementById('password').value;
    const textCerto = document.getElementById('certo')
    const textErro = document.getElementById('erro')

    if(!user || !key){
        textErro.innerHTML ="Por favor, preencha todos os campos.";
        textCerto.innerHTML = " ";
    }else if(name == user && password == key){
        textErro.innerHTML =" ";
        textCerto.innerHTML = "Login feito com sucesso";
        window.location.href= "../inicial2/index.html"
        textBem.innerHTML = user
        
    }else{
        textErro.innerHTML ="Senha ou email incorreto";
        textCerto.innerHTML = " "
    }

}
