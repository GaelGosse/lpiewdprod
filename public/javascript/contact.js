document.addEventListener('DOMContentLoaded', ()=> {
    window.addEventListener('load', ()=>{
        $('.loader').fadeOut("slow");
    })

    let boxres = document.getElementById('response')
    switch(msg){
        case 'nothing':
            boxres.style.display = "none"
            break;
        case 'error':
            boxres.innerHTML = "une erreur est survénue, elle a été enregistré<br>et communiqué à l'administrateur"
            boxres.style.display = "block"
            boxres.style.background = "crimson"
            setTimeout(() => {
                $('#response').fadeOut("slow")
            }, 3000);
            break;
        case 'send':
            boxres.innerHTML = 'votre message a bien été envoyé'
            boxres.style.display = "block"
            boxres.style.background = "mediumseagreen"
            setTimeout(() => {
                $('#response').fadeOut("slow")
            }, 6000);
            break;
    }
})
