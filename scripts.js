
document.getElementById("submit").onclick = function (e) {
    const notaUm = parseFloat(document.getElementById("n1").value);
    const notaDois = parseFloat(document.getElementById("n2").value);
    const notaTres = parseFloat(document.getElementById("n3").value);
    const notaQuatro = parseFloat(document.getElementById("n4").value);

    const media = ((notaUm + notaDois + notaTres + notaQuatro) / 4).toFixed(1);

    let resultado;

    if (media >= 6){
        resultado = "Você foi Aprovado";
    } else {
        resultado = "Você foi Repovado";
    }
  
document.getElementById("resultado").innerHTML = `A media da sua nota é <em><b>${media}</b></em> e <em>${resultado}</em>`}