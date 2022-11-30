function idadeDirecao(){
    let idade = document.getElementById("idade").value

    if (idade < 18 && idade >=1){
        document.getElementById("resultado").innerHTML = "Você ainda não pode dirigir!"
    }
    else if(idade >= 18 && idade <= 100){
        document.getElementById("resultado").innerHTML = "Você já pode dirigir!"
    }
    else{
        document.getElementById("resultado").innerHTML = "Número inválido!!"
    }

}