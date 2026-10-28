const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reducedMotion)document.documentElement.classList.add('js-motion');
const links=[...document.querySelectorAll('.side-nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const current=entry.target.dataset.section;links.forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});}})},{rootMargin:'-35% 0px -35% 0px',threshold:0});
document.querySelectorAll('[data-section]').forEach(s=>observer.observe(s));
const dialog=document.querySelector('#info-dialog');function showInfo(title,copy){document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-copy').textContent=copy;dialog.showModal();}document.querySelector('.close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#resume').onclick=()=>{const link=document.createElement('a');link.href='assets/resume/wang-lulu-resume.pdf?v=a1773af47a2d';link.download='王露露-交互设计3年经验.pdf';document.body.append(link);link.click();link.remove();};
const projects=[{name:'AI Pilot',image:'assets/project-covers/ai-pilot.webp',year:'2024 – 2025',type:'AI AGENT'},{name:'AI Optimization',image:'assets/project-covers/ai-optimization.webp',year:'2025',type:'PC /OPTIMIZATION TOOL'},{name:'E-Workflow',image:'assets/project-covers/e-workflow.webp',year:'2025',type:'MOBILE APP'}];let selected=0;const tabs=[...document.querySelectorAll('[data-project]')];function selectProject(index){if(index===selected)return;selected=index;tabs.forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});const p=projects[index];document.querySelector('#project-year').textContent=p.year||'SELECTED WORK';document.querySelector('#project-preview').setAttribute('aria-labelledby','project-'+index);document.querySelector('#open-project').setAttribute('aria-label','View '+p.name+' project');advanceProjectFilm(p);}
tabs.forEach((b,i)=>{b.addEventListener('click',()=>{if(i===0){window.location.href='ai-pilot.html';return;}if(i===1){window.location.href='ai-optimization.html';return;}if(i===2){window.location.href='e-workflow.html';return;}selectProject(i);});b.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(i+1)%3;else if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(i+2)%3;else if(e.key==='Home')n=0;else if(e.key==='End')n=2;else return;e.preventDefault();selectProject(n);tabs[n].focus();});});document.querySelector('#open-project').onclick=()=>{if(selected===0){window.location.href='ai-pilot.html';return;}if(selected===1){window.location.href='ai-optimization.html';return;}if(selected===2){window.location.href='e-workflow.html';return;}showInfo(projects[selected].name,'The full case study is coming soon. Get in touch to learn more about this project.');};
let toastTimer;function toast(message){const el=document.querySelector('.toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3000);}document.querySelector('#wechat').onclick=async()=>{try{await navigator.clipboard.writeText('Aster_1220');toast('WeChat ID copied');}catch{toast('WeChat: Aster_1220');}};
const mood=document.querySelector('.mood');
const homeMusic=new Audio('assets/audio/hollywood.mp3');
homeMusic.preload='none';
homeMusic.loop=true;
homeMusic.volume=.45;
mood.title='Hollywood — 黑裙子';
const syncMood=()=>{
 const playing=!homeMusic.paused;
 mood.setAttribute('aria-pressed',String(playing));
 mood.textContent=playing?'Ⅱ Pause the mood':'♫ Play a little mood';
};
homeMusic.addEventListener('play',syncMood);
homeMusic.addEventListener('pause',syncMood);
homeMusic.addEventListener('error',()=>{syncMood();toast('Music could not load. Please try again.');});
mood.onclick=async()=>{
 if(!homeMusic.paused){homeMusic.pause();return;}
 try{await homeMusic.play();}catch{syncMood();toast('Music could not play. Please try again.');}
};
syncMood();
// Replay the simultaneous entrance whenever About re-enters the viewport.
const aboutSection=document.querySelector('#about');
const aboutEntrance=new IntersectionObserver(entries=>{for(const entry of entries){aboutSection.classList.toggle('is-developed',entry.isIntersecting);}},{threshold:0});
aboutEntrance.observe(aboutSection);
const photoToggle=document.querySelector('.photo-toggle');
photoToggle.addEventListener('click',()=>{const flipped=document.querySelector('.portrait').classList.toggle('is-flipped');photoToggle.setAttribute('aria-pressed',String(flipped));photoToggle.setAttribute('aria-label',flipped?'翻回照片正面':'翻看照片背面的手写寄语');document.querySelector('.photo-back').setAttribute('aria-hidden',String(!flipped));document.querySelector('.photo-front').setAttribute('aria-hidden',String(flipped));});

// Project interaction follows the observed Ember behaviour: 500ms opacity,
// persistent last hovered item, and automatic selection in the middle 20%.
const projectSection=document.querySelector('#projects');
const projectHeading=projectSection.querySelector('.section-heading');
const projectReveal=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting&&entry.intersectionRatio>=.2){projectHeading.classList.add('is-revealed');projectReveal.unobserve(entry.target);}}},{threshold:.2});
projectReveal.observe(projectHeading);
tabs.forEach((tab,index)=>{
 tab.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')selectProject(index);});
 tab.addEventListener('focus',()=>selectProject(index));
});
const projectScroll=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)selectProject(Number(entry.target.dataset.project));}},{rootMargin:'-40% 0px -40% 0px',threshold:0});
tabs.forEach(tab=>projectScroll.observe(tab));

// Keep all travel photos in a circular deck; lock only during the short turn.
const photoDeck=document.querySelector('.photo-deck');
const deckCards=[...photoDeck.querySelectorAll('.polaroid-card')];
let deckBusy=false,deckTurns=0;
function loadUpcomingCards(){deckCards.slice(0,9).forEach(card=>{const img=card.querySelector('img');if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src;} });}
loadUpcomingCards();
function layOutDeck(){loadUpcomingCards();deckCards.forEach((card,i)=>{card.dataset.slot=String(Math.min(i,7));card.style.zIndex=String(deckCards.length-i);});}
photoDeck.addEventListener('click',async()=>{
 if(deckBusy)return;
 deckBusy=true;
 const card=deckCards[0];
 const start=getComputedStyle(card).transform;
 const sideways='translate(108%,-7%) rotate(16deg) rotateY(-16deg)';
 try{
  const nextPhoto=deckCards[1].querySelector('img');
  try{await nextPhoto.decode();}catch{return;}
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
   const out=card.animate([{transform:start},{transform:sideways}],{duration:360,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'});
   await out.finished;
   deckCards.push(deckCards.shift());layOutDeck();
   // Show the departing card behind the stack while it returns to the bottom.
   card.style.visibility='visible';card.style.opacity='1';
   const back=card.animate([{transform:sideways},{transform:'translate(0,0) rotate(0deg)'}],{duration:420,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
   out.cancel();await back.finished;back.cancel();
   card.style.removeProperty('visibility');card.style.removeProperty('opacity');
  }else{deckCards.push(deckCards.shift());layOutDeck();}
  deckTurns=(deckTurns+1)%deckCards.length;

  photoDeck.setAttribute('aria-label',deckCards[0].querySelector('.polaroid-note').getAttribute('aria-label')+' 翻看下一张宝丽来照片');
 }finally{deckBusy=false;}
});

// Observe the copy itself so the reveal also starts in view on narrow screens.
const bio=document.querySelector('.bio');
const bioGrowth=new IntersectionObserver(entries=>{for(const entry of entries){bio.classList.toggle('is-growing',entry.isIntersecting);}},{threshold:0,rootMargin:'0px 0px -5% 0px'});
bioGrowth.observe(bio);

// Decode before advancing; a newer selection cancels any unfinished advance.
let filmRequest=0;
const filmImage=document.querySelector('.preview-image>img');
const filmPreloads=new Map();
function getProjectImage(project){
 if(!filmPreloads.has(project.image)){const img=new Image();img.decoding='async';img.src=project.image;filmPreloads.set(project.image,img);}
 return filmPreloads.get(project.image);
}
const projectImageObserver=new IntersectionObserver(entries=>{
 if(entries.some(entry=>entry.isIntersecting)){
  projects.forEach(getProjectImage);projectImageObserver.disconnect();
 }
},{rootMargin:'300px'});
projectImageObserver.observe(document.querySelector('#projects'));
async function advanceProjectFilm(project){
 const request=++filmRequest;
 filmImage.getAnimations().forEach(animation=>animation.cancel());
 filmSound.pause();
 const next=getProjectImage(project);
 try{await next.decode();}catch{return;}
 if(request!==filmRequest)return;
 playFilmSound();
 if(reducedMotion){filmImage.src=project.image;filmImage.alt=project.name+' project cover';return;}
 try{
  const exit=filmImage.animate([
   {transform:'translateY(0)',filter:'brightness(1) blur(0px)',opacity:1,offset:0},
   {transform:'translateY(2%)',filter:'brightness(.8) blur(0px)',opacity:1,offset:.2},
   {transform:'translateY(-110%)',filter:'brightness(.45) blur(2px)',opacity:.2,offset:1}
  ],{duration:120,easing:'cubic-bezier(.6,0,.9,.4)',fill:'forwards'});
  await exit.finished;
  if(request!==filmRequest)return;
  await new Promise(resolve=>setTimeout(resolve,110));
  if(request!==filmRequest)return;
  filmImage.src=project.image;filmImage.alt=project.name+' project cover';
  exit.cancel();
  const enter=filmImage.animate([
   {transform:'translateY(108%)',filter:'brightness(.45) blur(2px)',opacity:0,offset:0},
   {transform:'translateY(108%)',filter:'brightness(.45) blur(2px)',opacity:0,offset:.08},
   {transform:'translateY(-1.3%)',filter:'brightness(.86) blur(.4px)',opacity:1,offset:.65},
   {transform:'translateY(.6%)',filter:'brightness(.96) blur(0px)',opacity:1,offset:.8},
   {transform:'translateY(-.2%)',filter:'brightness(1) blur(0px)',opacity:1,offset:.9},
   {transform:'translateY(0)',filter:'brightness(1) blur(0px)',opacity:1,offset:1}
  ],{duration:160,easing:'linear'});
  await enter.finished;
 }catch{/* A newer selection cancels the previous animation. */}
}

const filmSound=new Audio('assets/audio/projector-advance-light.m4a');
filmSound.preload='none';filmSound.volume=.22;
const filmSoundButton=document.querySelector('#film-sound');
let filmSoundEnabled=true;
filmSoundButton.addEventListener('click',()=>{
 filmSoundEnabled=!filmSoundEnabled;
 filmSoundButton.setAttribute('aria-pressed',String(filmSoundEnabled));
 filmSoundButton.textContent=filmSoundEnabled?'SOUND ON':'SOUND OFF';
 if(!filmSoundEnabled)filmSound.pause();
});
function playFilmSound(){
 filmSound.pause();filmSound.currentTime=0;
 if(filmSoundEnabled)filmSound.play().catch(()=>{});
}

// Clip content to the same scaled rounded outline as the background.
if(!reducedMotion){
 const journey=document.querySelector('.film-experience');
 let journeyFrame=0;
 const updateJourneyShape=()=>{
  journeyFrame=0;
  const top=journey.getBoundingClientRect().top;
  const progress=Math.min(1,Math.max(0,(innerHeight-top)/(innerHeight*.6)));
  const finalRadius=innerWidth<=760?24:innerWidth*50/1920;
  const initialRadius=Math.min(608,innerWidth*.5);
  journey.style.setProperty('--journey-radius',`${initialRadius+(finalRadius-initialRadius)*progress}px`);
  const scale=.9+.1*progress;
  journey.style.setProperty('--journey-scale',String(scale));
  const panel=getComputedStyle(journey,'::before');
  const t=parseFloat(panel.top),r=parseFloat(panel.right),b=parseFloat(panel.bottom),l=parseFloat(panel.left);
  const dx=(journey.clientWidth-l-r)*(1-scale)/2;
  const dy=(journey.clientHeight-t-b)*(1-scale)/2;
  const radius=Math.min(initialRadius+(finalRadius-initialRadius)*progress,(journey.clientWidth-l-r)/2,(journey.clientHeight-t-b)/2)*scale;
  journey.style.clipPath=`inset(${t+dy}px ${r+dx}px ${b+dy}px ${l+dx}px round ${radius}px)`;
 };
 const queueJourneyShape=()=>{if(!journeyFrame)journeyFrame=requestAnimationFrame(updateJourneyShape);};
 addEventListener('scroll',queueJourneyShape,{passive:true});
 addEventListener('resize',queueJourneyShape);
 updateJourneyShape();
}

// Reveal each film photo once for the current page visit.
document.querySelectorAll(".journey-film-frame").forEach(frame=>{
 frame.addEventListener("pointerenter",()=>frame.classList.add("is-developed"),{once:true});
});
// Contact footer: local China time, updated without announcing every second.
const contactTime=document.querySelector('#contact-time');
const contactDate=document.querySelector('#contact-date');
const clockTimeFormat=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true});
const clockDateFormat=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Shanghai',weekday:'long',month:'short',day:'2-digit',year:'numeric'});
function updateContactClock(){
 const now=new Date();
 contactTime.textContent=clockTimeFormat.format(now);
 contactDate.textContent=clockDateFormat.format(now)+' (GMT +08)';
 document.querySelector('#contact-year').textContent=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Shanghai',year:'numeric'}).format(now);
}
updateContactClock();setInterval(updateContactClock,1000);
document.querySelector('#back-to-top').addEventListener('click',()=>{window.scrollTo({top:0,behavior:reducedMotion?'instant':'smooth'});});
// Reference motion: the final arrow/word line tracks scroll horizontally.
if(!reducedMotion){
 const landscape=document.querySelector('.contact-landscape');
 const finalLine=document.querySelector('.contact-statement .line-four');
 let contactFrame=0;
 const updateContactMotion=()=>{
  contactFrame=0;
  const rect=landscape.getBoundingClientRect();
  const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));
  finalLine.style.transform=`translate3d(${(progress-.5)*50}%,0,0)`;
 };
 const queueContactMotion=()=>{if(!contactFrame)contactFrame=requestAnimationFrame(updateContactMotion);};
 addEventListener('scroll',queueContactMotion,{passive:true});addEventListener('resize',queueContactMotion);
 updateContactMotion();
}

// Stop texture work off screen and in background tabs.
const grainLandscape=document.querySelector('.contact-landscape');
let grainInView=false;
const syncContactGrain=()=>grainLandscape.classList.toggle('is-grain-active',grainInView&&!document.hidden&&!reducedMotion);
const grainVisibility=new IntersectionObserver(entries=>{grainInView=entries[0].isIntersecting;syncContactGrain();},{threshold:0});
grainVisibility.observe(grainLandscape);
document.addEventListener('visibilitychange',syncContactGrain);

// Run Journey background grain only while the card is visible.
const journeyGrain=document.querySelector('.film-experience');
let journeyGrainInView=false;
const syncJourneyGrain=()=>journeyGrain.classList.toggle('is-grain-active',journeyGrainInView&&!document.hidden&&!reducedMotion);
const journeyGrainObserver=new IntersectionObserver(entries=>{
 journeyGrainInView=entries[0].isIntersecting;
 syncJourneyGrain();
},{threshold:0});
journeyGrainObserver.observe(journeyGrain);
document.addEventListener('visibilitychange',syncJourneyGrain);


// Gentle first-view entrance; only opacity and independent translation animate.
if(!reducedMotion){
 const textTargets=[...document.querySelectorAll(
  '.hero h1>span,.hero header,.bio p,.bio .eyebrow,.film-title,.film-meta,.film-history h3,.film-history p,.projects .section-heading,.project>span,.project>small,.preview-meta,.contact-line,.contact-details>*'
 )];
 const restingOpacity=new WeakMap();
 textTargets.forEach(el=>{
  restingOpacity.set(el,getComputedStyle(el).opacity);
  el.style.opacity='0';
 });
 const textEntrance=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
  visible.forEach((entry,index)=>{
   const el=entry.target;
   textEntrance.unobserve(el);
   const opacity=restingOpacity.get(el);
   el.style.removeProperty('opacity');
   const animation=el.animate([
    {opacity:0,translate:'0 20px'},
    {opacity,translate:'0 0'}
   ],{duration:900,delay:Math.min(index*60,180),easing:'cubic-bezier(.16,1,.3,1)',fill:'both'});
   animation.finished.then(()=>animation.cancel()).catch(()=>{animation.cancel();});
  });
 },{threshold:0,rootMargin:'0px 0px 40px 0px'});
 textTargets.forEach(el=>textEntrance.observe(el));
}


// Film-window parallax: retain the frame and pan only the photograph.
if(!reducedMotion){
 const filmWindow=document.querySelector('.film-art');
 const portraitPhotos=new Set(['18','23','16','17','15']);
 const filmPans=[...filmWindow.querySelectorAll('.journey-film-frame')].map((frame,index)=>{
  const img=frame.querySelector('img');
  const number=img.getAttribute('src').match(/photo-(\d+)/)?.[1];
  const portrait=portraitPhotos.has(number);
  img.style.transformOrigin=img.style.objectPosition||'50% 50%';
  return {frame,img,portrait,column:Math.floor(index/5),value:0,target:0};
 });
 let panVisible=false,panFrame=0,lastPanTime=0;
 function renderFilmPan(time){
  panFrame=0;
  if(!panVisible||document.hidden)return;
  const dt=Math.min(50,lastPanTime?time-lastPanTime:16);
  lastPanTime=time;
  const ease=1-Math.exp(-dt/110);
  let moving=false;
  filmPans.forEach(item=>{
   item.value+=(item.target-item.value)*ease;
   if(Math.abs(item.target-item.value)>.001)moving=true;
   const amount=item.portrait?1.2:3;
   const direction=item.column===1?-1:1;
   const y=item.value*amount*direction;
   const x=item.portrait?0:item.value*(item.column-1)*.7;
   const zoom=(item.portrait?1.06:1.12)+(1-Math.abs(item.value))*(item.portrait?.01:.025);
   item.img.style.transform='translate3d('+x+'%,'+y+'%,0) scale('+zoom+')';
  });
  if(moving)panFrame=requestAnimationFrame(renderFilmPan);
 }
 function queueFilmPan(){
  if(!panVisible||document.hidden)return;
  filmPans.forEach(item=>{
   const rect=item.frame.getBoundingClientRect();
   item.target=Math.max(-1,Math.min(1,(innerHeight/2-(rect.top+rect.height/2))/(innerHeight/2+rect.height/2)));
  });
  if(!panFrame){lastPanTime=0;panFrame=requestAnimationFrame(renderFilmPan);}
 }
 const filmPanObserver=new IntersectionObserver(entries=>{
  panVisible=entries[0].isIntersecting;
  filmWindow.classList.toggle('is-panning',panVisible);
  if(panVisible)queueFilmPan();
  else{cancelAnimationFrame(panFrame);panFrame=0;}
 });
 filmPanObserver.observe(filmWindow);
 addEventListener('scroll',queueFilmPan,{passive:true});
 addEventListener('resize',queueFilmPan);
 document.addEventListener('visibilitychange',queueFilmPan);
}


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


// Ambient rising lights stay behind content and pause outside the viewport.
if(!reducedMotion){
 const glowLayers=[];
 const glowVisible=new Set();
 const syncGlow=()=>glowLayers.forEach(layer=>layer.classList.toggle('is-active',glowVisible.has(layer)&&!document.hidden));
 const glowObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)glowVisible.add(entry.target);else glowVisible.delete(entry.target);});
  syncGlow();
 });
 const glowResize=new ResizeObserver(entries=>entries.forEach(entry=>entry.target.style.setProperty('--rise',(entry.contentRect.height+30)+'px')));
 document.querySelectorAll('#home,#about,#projects,.contact-footer').forEach((panel,panelIndex)=>{
  const layer=document.createElement('div');
  layer.className='ambient-glow';
  layer.setAttribute('aria-hidden','true');
  const count=panel.matches('.contact-footer')?14:28;
  for(let i=0;i<count;i++){
   const dot=document.createElement('i');
   // Distribute lights without clustering or synchronized launch times.
   const phase=(i*.61803398875+panelIndex*.17)%1;
   dot.style.setProperty('--x',((i*43.7+panelIndex*19)%100)+'%');
   dot.style.setProperty('--size',(2.2+(i%4)*.6)+'px');
   dot.style.setProperty('--duration',(18+(i%7)*2.3)+'s');
   dot.style.setProperty('--delay',(-phase*34)+'s');
   dot.style.setProperty('--drift',((i%2?1:-1)*(12+i%5*7))+'px');
   dot.style.setProperty('--alpha',String(.4+(i%4)*.1));
   layer.append(dot);
  }
  panel.prepend(layer);
  glowLayers.push(layer);glowObserver.observe(layer);glowResize.observe(layer);
 });
 document.addEventListener('visibilitychange',syncGlow);
}
