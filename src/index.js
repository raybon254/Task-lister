document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector('form')
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      toDo()
      form.reset();
    })
  });
  
  function toDo(){
      const desc = document.getElementById('description').value.trim()
      console.log(desc)
  
      const p = document.createElement('p')  
      const ul = document.createElement('ul')
      const li = document.createElement('li')
      const btn = document.createElement('button')
  
      btn.addEventListener('click', ()=>{
          btn.parentNode.remove()
      })
  
      btn.textContent = 'X'
      li.textContent = desc
      btn.style.marginLeft = '5px'
  
  
      li.appendChild(btn)
      ul.appendChild(li)
      p.appendChild(ul)
      
      
      
      const display = document.querySelector('#list')
      display.appendChild(p)
  }
  
  