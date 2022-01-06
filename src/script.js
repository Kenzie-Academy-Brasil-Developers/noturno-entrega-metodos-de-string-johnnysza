// Seu código vai aqui;

function showResults (){
    const textContent = document.getElementById("textContent");
    textContent.innerHTML = ""
    let texto = document.getElementById("stringInput").value;
    const resultado = document.createElement("p");
    resultado.innerHTML = texto

    textContent.appendChild(resultado);
}



function teste(){
    let texto = document.getElementById("stringInput").value;   
    document.getElementById("textContent").innerHTML = texto;
    
}

const botaoUpper =  document.getElementById("toUpperCase");
botaoUpper.addEventListener("click", (event) => {
    event.preventDefault();
    showResults()
})

