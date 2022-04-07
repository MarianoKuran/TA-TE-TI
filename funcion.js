let contador = 0;

document.getElementById("casilla1").addEventListener("click", function (){
    if(document.getElementById("casilla1").innerHTML === ''){
        contador++
        let letra = document.querySelector("#casilla1")
        if(contador%2 === 1){
            console.log("inpar")
            letra.innerHTML = 'X'
            if(contador % 2 === 1){
                letra.style.color = " rgba(255, 7, 7, 0.664);"
                letra.style = "text-shadow 0px 0px 15px rgba(255, 77, 77, 0.938);"
            }
        } else {
            console.log("par")
            letra.style.color = "rgba(82, 82, 255, 0.603)"
            letra.style = "text-shadow 0px 0px 20px rgba(53, 53, 255, 0.959)"
            letra.innerHTML = 'O'
        }
    }
})
document.getElementById("casilla2").addEventListener("click", function (){
    if(document.getElementById("casilla2").innerHTML === ''){
        contador++
        if(contador % 2 === 1){
            document.getElementsByClassName("casilla2")[0].style.color = "rgba(255, 7, 7, 0.664)"
            document.getElementsByClassName("casilla2")[0].style = "text-shadow 0px 0px 15px rgba(255, 77, 77, 0.938)"
            document.getElementById("casilla2").innerHTML = 'X'   
        } else{
            document.getElementsByClassName("casilla2")[0].style.color = "rgba(82, 82, 255, 0.603)"
            document.getElementsByClassName("casilla2")[0].style = "text-shadow 0px 0px 20px rgba(53, 53, 255, 0.959)"
            document.getElementById("casilla2").innerHTML = 'O'
        }
    }
})

