// theme_toggle.js - alterna entre theme-light.css e theme-dark.css e persiste em localStorage
(function(){
  const THEME_KEY = 'site-theme';
  function setTheme(name){
    const link = document.getElementById('theme-link');
    if(!link) return;
    link.href = 'css/' + name + '.css';
    localStorage.setItem(THEME_KEY, name);
    // update button text if any
    const btn = document.getElementById('themeToggle');
    if(btn) btn.textContent = name === 'theme-dark' ? 'Tema Claro' : 'Tema Escuro';
  }
  function getTheme(){ return localStorage.getItem(THEME_KEY) || 'theme-light'; }
  document.addEventListener('DOMContentLoaded', ()=>{
    // Ensure theme-link exists
    if(!document.getElementById('theme-link')){
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.id = 'theme-link';
      document.head.appendChild(l);
    }
    setTheme(getTheme());
    // attach to toggle button
    const btn = document.getElementById('themeToggle');
    if(btn) btn.addEventListener('click', ()=>{
      const cur = getTheme();
      setTheme(cur === 'theme-light' ? 'theme-dark' : 'theme-light');
    });
  });
})();