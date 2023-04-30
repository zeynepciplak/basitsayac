// Add your code here
  const counter=document.getElementById("counter");
  const prevBtn =document.querySelector(".prevBtn");
  const nextBtn=document.querySelector(".nextBtn");
  let count =0;
  
    prevBtn.addEventListener("click",() =>{
      count--; 
      counter.innerHTML=count;

    });
    nextBtn.addEventListener("click",() =>{
      count++;
      counter.innerHTML=count;
    });
 