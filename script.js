function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'images/bom-dia1.jpg'
        document.body.style.background = '#5C7562'
    }
    else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'images/boa-tarde.jpg'
        document.body.style.background = '#FE6F43'
    }
    else {
        //boa noite
        img.src = 'images/boa-noite.jpg'
        document.body.style.background = '#114B79'
    }
}