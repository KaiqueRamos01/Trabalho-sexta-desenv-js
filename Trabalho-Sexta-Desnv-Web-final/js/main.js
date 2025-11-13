// main.js - interações simples e micro animações
document.addEventListener('DOMContentLoaded', function(){
  // login no hero
  const loginBtn = document.getElementById('loginBtn');
  if(loginBtn){
    loginBtn.addEventListener('click', function(){
      const email = document.getElementById('email').value.trim();
      const pass = document.getElementById('senha').value.trim();
      if(!email || !pass){
        alert('Preencha e-mail e senha para continuar.');
        return;
      }
      this.textContent = 'Entrando...';
      setTimeout(()=> {
        this.textContent = 'Entrar';
        alert('Login simulado com sucesso! (redeirecionamento para página principal)');
      }, 800);
    });
  }

  // pequenas interações: aplicar efeito fade-in sequencial
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el, i) => {
    el.style.animationDelay = (i * 120) + 'ms';
  });
});