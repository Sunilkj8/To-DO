add=document.querySelector('#add');
input=document.querySelector('#inputs')

// console.log(add)
add.addEventListener('click',()=>{ 
  
 inp=document.createElement('div')
 inp.setAttribute('class','input')
 txt=document.createElement('input')
 btn=document.createElement('button')
 txt.setAttribute('type','text')
 txt.setAttribute('placeholder','Text here')
 txt.setAttribute('class','text1')
 btn.setAttribute('class','done')
 btn.innerHTML='<i class="fa-solid fa-square-check"></i>'
 btnDel=document.createElement('button')
 btnDel.setAttribute('class','delete')
 btnDel.innerHTML=`<i class="fa-sharp fa-solid fa-trash"></i>`
 inp.appendChild(btn)
 inp.appendChild(txt)
 inp.appendChild(btnDel)
 input.appendChild(inp)

 done=document.querySelectorAll('.done')
 for(i=0;i<done.length;i++){ 
    done[i].addEventListener('click',()=>{ 
        txt.readOnly=true
        txt.style.textDecoration='line-through'
    })
    
 }

  remove_task=document.querySelectorAll('.delete')
  remove_task.forEach(element => {
       element.addEventListener('click',()=>{ 
           element.parentElement.remove()
       })
  });



  


 
})
