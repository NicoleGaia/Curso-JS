function verificar(){
    var nome = document.getElementById('txtnome')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <15){
                img.setAttribute('src', 'criança H.jpg')
            } else if (idade >= 15 && idade < 60){
               img.setAttribute('src', 'Homem.jpg') 
            } else {
                img.setAttribute('src', 'idoso H.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <15){
                img.setAttribute('src', 'criança M.jpg')
            } else if (idade >= 15 && idade < 60){
                img.setAttribute('src', 'Mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa M.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Olá, ${nome.value}!<br>`
        res.innerHTML += `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
}
}