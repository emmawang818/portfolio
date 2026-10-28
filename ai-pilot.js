// Fine-pointer cursor with difference blending; native pointer on touch and keyboard.
{
 const cursorSupport=matchMedia('(hover:hover) and (pointer:fine)');
 const forcedColors=matchMedia('(forced-colors:active)');
 const dot=document.createElement('div');
 dot.className='portfolio-cursor';
 dot.setAttribute('aria-hidden','true');
 document.body.append(dot);
 let cursorFrame=0,cursorX=0,cursorY=0;
 const hideDot=()=>{
  dot.classList.remove('is-visible','is-interactive');
  document.documentElement.classList.remove('has-dot-cursor');
  cancelAnimationFrame(cursorFrame);cursorFrame=0;
 };
 const interactive='a,button,input,textarea,select,summary,[role="button"],[role="tab"],[tabindex]:not([tabindex="-1"])';
 document.addEventListener('pointermove',event=>{
  if(!cursorSupport.matches||forcedColors.matches||event.pointerType==='touch'){hideDot();return;}
  cursorX=event.clientX;cursorY=event.clientY;
  dot.classList.toggle('is-interactive',Boolean(event.target.closest(interactive)));
  if(!cursorFrame)cursorFrame=requestAnimationFrame(()=>{
   cursorFrame=0;
   dot.style.left=cursorX+'px';dot.style.top=cursorY+'px';
   dot.classList.add('is-visible');
   document.documentElement.classList.add('has-dot-cursor');
  });
 },{passive:true});
 document.documentElement.addEventListener('pointerleave',hideDot);
 addEventListener('blur',hideDot);
 document.addEventListener('keydown',event=>{if(event.key==='Tab')hideDot();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)hideDot();});
 cursorSupport.addEventListener('change',hideDot);
 forcedColors.addEventListener('change',hideDot);
}


// A viewport-sized layer keeps rising particles consistent on long case studies.
{
 const motionPreference=matchMedia('(prefers-reduced-motion:reduce)');
 const layer=document.createElement('div');
 layer.className='ambient-glow';
 layer.setAttribute('aria-hidden','true');
 for(let i=0;i<28;i++){
  const dot=document.createElement('i');
  const phase=(i*.61803398875)%1;
  dot.style.setProperty('--x',((i*43.7)%100)+'%');
  dot.style.setProperty('--size',(2.2+(i%4)*.6)+'px');
  dot.style.setProperty('--duration',(18+(i%7)*2.3)+'s');
  dot.style.setProperty('--delay',(-phase*34)+'s');
  dot.style.setProperty('--drift',((i%2?1:-1)*(12+i%5*7))+'px');
  dot.style.setProperty('--alpha',String(.4+(i%4)*.1));
  layer.append(dot);
 }
 document.body.prepend(layer);
 const resize=new ResizeObserver(entries=>{
  layer.style.setProperty('--rise',(entries[0].contentRect.height+30)+'px');
 });
 resize.observe(layer);
 const sync=()=>layer.classList.toggle('is-active',!document.hidden&&!motionPreference.matches);
 document.addEventListener('visibilitychange',sync);
 motionPreference.addEventListener('change',sync);
 sync();
}
