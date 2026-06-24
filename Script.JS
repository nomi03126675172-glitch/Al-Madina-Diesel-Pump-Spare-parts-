document.querySelectorAll('.card').forEach(card=>{
 card.addEventListener('mousemove',()=>{
   card.style.boxShadow='0 0 30px gold';
 });
 card.addEventListener('mouseleave',()=>{
   card.style.boxShadow='none';
 });
});
