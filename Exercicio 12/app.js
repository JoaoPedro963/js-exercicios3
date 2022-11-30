function media(){
    let n1 = parseFloat(document.getElementById("nota1").value)
    let n2 = parseFloat(document.getElementById("nota2").value)
    let n3 = parseFloat(document.getElementById("nota3").value)

    let media = (n1 + n2 + n3) / 3

    if (media >= 7){
        document.getElementById("resposta").innerHTML = media.toFixed(2) + "<br> Aprovado!"
    }
    else if (media == 5 && media <= 6){
        document.getElementById("resposta").innerHTML = media.toFixed(2) + "<br> Recuperação!"
    }
    else {
        document.getElementById("resposta").innerHTML = media.toFixed(2) + "<br> Reprovado!"
    }
}