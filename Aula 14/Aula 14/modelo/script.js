function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var dados = document.getElementById('dados')
    var res = document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.length == 0){
        window.alert('[ERRO] Tente novamente!')
    } else{
        res.innerHTML = ('Contando: <br>')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('Valor inválido! Considerendo PASSO = 1')
            p = 1
        }
        if(i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += (`${c} `)
            }
        } else{
            for(c = i; c >= f; c -= p){
                res.innerHTML += (`${c} `)
            }
        }
    }
}