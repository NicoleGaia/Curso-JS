var numero = document.getElementById('txtn')
var tab = document.getElementById('selList')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
       // alert('Tudo ok!')
       valores.push(Number(numero.value))
       var item = document.createElement('option')
       item.text = `Valor ${numero.value} adicionado`
       tab.appendChild(item)
       res.innerHTML = ''
    } else {
       alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(p in valores){
            soma += valores[p]
            media = soma / tot
            if (valores[p] > maior)
                maior = valores[p]
            if (valores[p] < menor)
                menor = valores[p]
        }
        //res.innerHTML = ''
        res.innerHTML = `A lista possui ${tot} itens<br>`
        res.innerHTML += `O maior valor informado foi ${maior}<br>`
        res.innerHTML += `O menor valor informado foi ${menor}<br>`
        res.innerHTML += `A soma dos valores informados é ${soma} <br>`
        res.innerHTML += `A média dos valores informados é ${media}`
    }
}