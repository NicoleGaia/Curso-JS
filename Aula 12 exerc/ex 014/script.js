function carregar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manhã.jpg'
        document.body.style.background = 'purple'
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
        msg2.innerHTML = 'Boa tarde!'
    } else if (hora >= 18 && hora < 24){
        img.src = 'noite.jpg'
        document.body.style.background = 'grey'
        msg2.innerHTML = 'Boa noite!'
    }
}
