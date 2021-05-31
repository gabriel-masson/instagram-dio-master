let imgIruma = document.querySelector("#imageIruma");
imgIruma.addEventListener("mouseover",alterarFundo);

function alterarFundo(){
       
    imgIruma.src = "./img/iruma_Suzuki.png"
}

imgIruma.addEventListener("mouseout",alterarFundoDark);
function alterarFundoDark(){
    
    imgIruma.src = "./img/darkIrumaa.png"
}