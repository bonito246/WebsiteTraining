
      const stats=document.querySelectorAll('stat');
      stats.forEach(stat=>{
        stat.addEventListener('mouseenter',() =>{
            stat.classList.add('hovered'); 
             });

            stat.addEventListener('mouseleave',() =>{
            stat.classList.remove('hovered');
        });
      });

    function clickMe(){
        alert("Button clicked");
    }

     function click(){
        alert("you've clicked the second button");
     }
   