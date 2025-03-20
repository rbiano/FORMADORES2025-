document.addEventListener('DOMContentLoaded', function(){
    let tamanhoAtualFonte = 1;
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const tamanhoMinimoFonte = 0.5;
  
    aumentaFonteBotao.addEventListener('click', function(){
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
  
    diminuiFonteBotao.addEventListener('click', function(){
      if (tamanhoAtualFonte > tamanhoMinimoFonte) {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      }
    })
  })
  

 




















const voltarAoTopo = document.getElementById('voltar-ao-topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { /* Ajuste o valor para controlar quando o botão aparece */
    voltarAoTopo.style.display = 'block';
  } else {
    voltarAoTopo.style.display = 'none';
  }
});

voltarAoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
