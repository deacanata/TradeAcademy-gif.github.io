// Latar partikel ringan; jumlah partikel menyesuaikan ukuran layar.
(() => {
  const canvas=document.getElementById('particleCanvas'), ctx=canvas.getContext('2d');
  let w=0,h=0,particles=[],mx=0,my=0;
  function resize(){w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);w=innerWidth;h=innerHeight;const n=Math.min(65,Math.floor(w*h/18000));particles=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.7+.35,s:Math.random()*.32+.08,a:Math.random()*.65+.15,p:Math.random()*6.28}));}
  addEventListener('resize',resize);addEventListener('mousemove',e=>{mx=(e.clientX/w-.5)*9;my=(e.clientY/h-.5)*9;});resize();
  function draw(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.s;if(p.y<-5){p.y=h+5;p.x=Math.random()*w;}p.p+=.018;const alpha=p.a*(.65+.35*Math.sin(p.p));ctx.beginPath();ctx.arc(p.x+mx*.2,p.y+my*.2,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(232,189,104,${alpha})`;ctx.shadowBlur=8;ctx.shadowColor='rgba(232,189,104,.5)';ctx.fill();});ctx.shadowBlur=0;requestAnimationFrame(draw);}draw();
})();
