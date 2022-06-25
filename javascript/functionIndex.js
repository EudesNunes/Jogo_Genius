
function jogar() {
      var btns = document.getElementsByName('btnNivel')
      for (var i=0;i<btns.length;i++){
        if ( btns[i].checked ) {
            var nivelSelecionado =  (btns[i].id);
             localStorage.setItem('nivelSelecionado',nivelSelecionado );
             window.location.href = "html/layoutJogo.html";
        }
      }
     
}


