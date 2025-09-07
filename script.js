// Simple typewriter for array of strings
function typeWriter(elementId, lines, speed=50) {
  const target = document.getElementById(elementId);
  let line = 0, char = 0;
  function type() {
    if(line < lines.length){
      if(char < lines[line].length){
        target.innerHTML += lines[line][char];
        char++;
        setTimeout(type, speed);
      } else {
        target.innerHTML += "<br>";
        line++;
        char=0;
        setTimeout(type, 400);
      }
    }
  }
  type();
}

// Typewriter for <ul> list
function typeWriterList(elementId, items, speed=50){
  const ul = document.getElementById(elementId);
  let i=0;
  function typeLine(){
    if(i<items.length){
      const li = document.createElement("li");
      let charIndex=0;
      function typeChar(){
        if(charIndex<items[i].length){
          li.textContent+=items[i][charIndex];
          charIndex++;
          setTimeout(typeChar,speed);
        } else {
          li.textContent="> "+li.textContent;
          ul.appendChild(li);
          i++;
          setTimeout(typeLine,400);
        }
      }
      typeChar();
    }
  }
  typeLine();
}

// Confetti background
function confettiBackground(canvasId){
  const canvas=document.getElementById(canvasId);
  const ctx=canvas.getContext("2d");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  const confetti=[];
  const count=120;
  for(let i=0;i<count;i++){
    confetti.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*6+2,color:`hsl(${Math.random()*360},100%,50%)`});
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(c=>{
      ctx.beginPath();
      ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
      ctx.fillStyle=c.color;
      ctx.fill();
      c.y+=2+Math.random()*2;
      if(c.y>canvas.height){c.y=-10;c.x=Math.random()*canvas.width;}
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// Countdown timer
function countdownTimer(elementId, targetDate){
  const countEl=document.getElementById(elementId);
  function update(){
    const now=new Date().getTime();
    const t=new Date(targetDate).getTime()-now;
    if(t<0){
      countEl.innerHTML="🎉 Happy Birthday! 🎉";
      return;
    }
    const days=Math.floor(t/(1000*60*60*24));
    const hours=Math.floor((t%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((t%(1000*60*60))/(1000*60));
    const seconds=Math.floor((t%(1000*60))/1000);
    countEl.innerHTML=`Next birthday in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    requestAnimationFrame(update);
  }
  update();
}
