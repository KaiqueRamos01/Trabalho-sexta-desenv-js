// validacao.js - valida email (formato joao.silva@net.com) e CPF (999.999.999-99)
// Esta file deve ser referenciada somente em pages/contato.html
(function(){
  function byId(id){ return document.getElementById(id); }

  function showError(el,msg){
    let sp = el.nextElementSibling;
    if(!sp || !sp.classList || !sp.classList.contains('validation-msg')){
      sp = document.createElement('div');
      sp.className = 'validation-msg';
      el.parentNode.insertBefore(sp, el.nextSibling);
    }
    sp.textContent = msg;
    el.classList.add('invalid');
  }
  function clearError(el){
    let sp = el.nextElementSibling;
    if(sp && sp.classList && sp.classList.contains('validation-msg')) sp.textContent = '';
    el.classList.remove('invalid');
  }

  function validaEmail(value){
    // exige formato local.partes@net.com (ex: joao.silva@net.com)
    // aceita letras, números e ponto no local part
    const re = /^[a-z0-9]+(?:\.[a-z0-9]+)*@net\.com$/i;
    return re.test(value);
  }
  function validaCPF(value){
    const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return re.test(value);
  }

  document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contactForm');
    if(!form) return;

    const email = document.getElementById('email');
    const cpf = document.getElementById('cpf');

    // real-time clearing
    if(email) email.addEventListener('input', ()=> clearError(email));
    if(cpf) cpf.addEventListener('input', ()=> clearError(cpf));

    form.addEventListener('submit', function(e){
      let ok = true;
      if(email){
        if(!validaEmail(email.value.trim())){
          showError(email, 'Email inválido. Use formato joao.silva@net.com');
          ok = false;
        } else clearError(email);
      }
      if(cpf){
        if(!validaCPF(cpf.value.trim())){
          showError(cpf, 'CPF inválido. Use formato 999.999.999-99');
          ok = false;
        } else clearError(cpf);
      }
      if(!ok){
        e.preventDefault();
      }
    });
  });
})();