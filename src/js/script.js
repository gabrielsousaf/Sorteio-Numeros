function sortear(){
    
    let np = document.getElementById("value").value;
    let ns = Math.round(Math.random() * np);
    let rs = document.getElementById("result");

    rs.textContent= `O numero sorteado foi ${ns}`;

    if (!np || np<=0){
        
        rs.textContent=`Digite um valor valido`
    }

}