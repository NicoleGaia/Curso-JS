function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    var dados = document.getElementById('dados')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if(i < f){ 
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            } 
        } else {
        if(i > f){
            //contagem decrescente
            for(var c = i; c >=f; c -= p){
                res.innerHTML += `${c} `
                }
            } 
        }
  

    }
}


    /*while( inicio.value.length > 0 && fim.value.length > 0 && passo.value.length > 0){
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        else if ( i < f){
            for(var c = i; c <= f; c += p){
                dados.innerHTML += `${c}`
            }
        } else{
            for(var c = i; c >= f; c -= p){
                dados.innerHTML += `${c}`
            }
        }
    }
    res.innerHTML += `Fim!`*/
    /*if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('[ERRO] Faltam dados!')
    }*/
