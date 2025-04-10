function tabuada(){
    var numero = document.getElementById('txtT')
    var tabuada = document.getElementById('seltab')
   
    if (numero.value.length == 0 ){
        alert('Número inválido!')
    } else{
        var n = Number(numero.value)
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c = c + 1){
            var item = document.createElement('option')
            var r = n * c
            item.text = `${n} X ${c} = ${r}`
            tabuada.appendChild(item)
        }
        
    }
}