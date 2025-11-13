// carrega_dados.js - carrega dados.json e popula uma tabela com id="dataTable"
(async function(){
  function q(s){ return document.querySelector(s); }
  document.addEventListener('DOMContentLoaded', async function(){
    const table = document.getElementById('dataTable');
    if(!table) return;
    const dataUrl = table.getAttribute('data-url') || '../dados.json';
    try{
      const res = await fetch(dataUrl);
      if(!res.ok) throw new Error('Falha ao carregar ' + dataUrl);
      const data = await res.json();
      // assume array of objects
      const thead = table.createTHead();
      const hdrRow = thead.insertRow();
      const keys = Object.keys(data[0] || {});
      keys.forEach(k=>{
        const th = document.createElement('th');
        th.textContent = k.charAt(0).toUpperCase() + k.slice(1);
        hdrRow.appendChild(th);
      });
      const tbody = table.createTBody();
      data.forEach(item=>{
        const row = tbody.insertRow();
        keys.forEach(k=>{
          const cell = row.insertCell();
          cell.textContent = item[k];
        });
      });
    }catch(err){
      console.error(err);
      table.insertAdjacentHTML('afterend','<div class="data-error">Erro ao carregar dados.</div>');
    }
  });
})();