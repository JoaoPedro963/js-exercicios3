function media(){
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)

    let media = (nota1 + nota2 + nota3) / 3 .toFixed(2)

    if (media >= 5){
        document.getElementById("resultado").innerHTML = "Aprovado"
    }
    else{
        document.getElementById("resultado").innerHTML = "Reprovado"
    }

}