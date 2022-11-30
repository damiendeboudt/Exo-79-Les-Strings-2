let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

document.getElementById("index-pomme").innerHTML = pomme.indexOf("p");

document.getElementById("last-index-m").innerHTML = pomme.lastIndexOf("m");

if (pomme.startsWith("Elle")) {
    console.log(pomme)
}

if (pomme.endsWith("!")) {
    console.log(pomme)
}

let sub = pomme.substring(18,23)
document.getElementById("pomme").innerHTML = sub

for (i = 0; i < pomme.length; i ++){
    console.log(pomme[i])
   let ligne = document.createElement("br")
    document.getElementById("one-line").append(ligne)
    document.getElementById("one-line").innerHTML += pomme[i]
}

