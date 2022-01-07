// Seu código vai aqui;

function showResults (){
    const textContent = document.getElementById("textContent");
    textContent.innerHTML = ""
    // let texto = document.getElementById("stringInput").value;
    const resultado = document.createElement("p");
    resultado.innerHTML = texto

    textContent.appendChild(resultado);
}



function upperCase(){
    let texto = document.getElementById("stringInput").value;   
    document.getElementById("textContent").innerHTML = texto.toUpperCase();
}

const botaoUpper =  document.getElementById("toUpperCase");
botaoUpper.addEventListener("click", (event) => {
    event.preventDefault();
    upperCase()
})

function lowerCase(){
    let texto = document.getElementById("stringInput").value;   
    document.getElementById("textContent").innerHTML = texto.toLowerCase();
}

const botaoLower =  document.getElementById("toLowerCase");
botaoLower.addEventListener("click", (event) => {
    event.preventDefault();
    lowerCase()
})

function replace(){
    let texto = document.getElementById("stringInput").value;   
    document.getElementById("textContent").innerHTML = texto.replaceAll(".", "").replaceAll("-", "");
}

const botaoReplace =  document.getElementById("replace");
botaoReplace.addEventListener("click", (event) => {
    event.preventDefault();
    replace()
})


function concat(){
    let texto = document.getElementById("stringInput").value;   
    document.getElementById("textContent").innerHTML = texto.concat(" Academy");
}

const botaoConcat =  document.getElementById("concat");
botaoConcat.addEventListener("click", (event) => {
    event.preventDefault();
    concat()
})

function split(){
    let texto = document.getElementById("stringInput").value;   
    document.getElementById("textContent").innerText = texto.split(" ").join("\n");
}

const botaoSplit =  document.getElementById("split");
botaoSplit.addEventListener("click", (event) => {
    event.preventDefault();
    split()
})