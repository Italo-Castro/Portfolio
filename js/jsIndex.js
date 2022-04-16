function enviarMensagemWtsApp() {
    x = document.getElementById("textoMensagemWtsApp");
    mensagem = x.value;
    window.open("https://api.whatsapp.com/send?phone=3798089731&text="+mensagem); 
   
}

function enviarMensagemEmail() {
    x = document.getElementById("textoMensagemEmail");
    mensagem = x.value;
    window.open("mailto:?subject=Portfólio&amp;body=Olá,%0D%0A%0D%0A" + mensagem + "%0D%0A%0D%0AAtenciosamente,%0D%0A[nome do usuário]"); 

}


