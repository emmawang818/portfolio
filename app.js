const touchProjects=matchMedia('(hover:none), (pointer:coarse)').matches;
const mobileEffects=matchMedia('(max-width: 760px) and (pointer: coarse)').matches;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reducedMotion)document.documentElement.classList.add('js-motion');
const links=[...document.querySelectorAll('.side-nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const current=entry.target.dataset.section;links.forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});}})},{rootMargin:'-35% 0px -35% 0px',threshold:0});
document.querySelectorAll('[data-section]').forEach(s=>observer.observe(s));
const dialog=document.querySelector('#info-dialog');function showInfo(title,copy){document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-copy').textContent=copy;dialog.showModal();}document.querySelector('.close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#resume').onclick=()=>{const link=document.createElement('a');link.href='assets/resume/wang-lulu-resume.pdf?v=a1773af47a2d';link.download='王露露-交互设计3年经验.pdf';document.body.append(link);link.click();link.remove();};
const projects=[{name:'AI Pilot',image:'assets/project-covers/ai-pilot.webp',preview:'data:image/webp;base64,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',year:'2024 – 2025',type:'AI AGENT'},{name:'AI Optimization',image:'assets/project-covers/ai-optimization.webp',preview:'data:image/webp;base64,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',year:'2025',type:'PC /OPTIMIZATION TOOL'},{name:'E-Workflow',image:'assets/project-covers/e-workflow.webp',preview:'data:image/webp;base64,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',year:'2025',type:'MOBILE APP'}];let selected=0;const tabs=[...document.querySelectorAll('[data-project]')];function selectProject(index){if(index===selected)return;selected=index;tabs.forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});const p=projects[index];document.querySelector('#project-year').textContent=p.year||'SELECTED WORK';document.querySelector('#project-preview').setAttribute('aria-labelledby','project-'+index);document.querySelector('#open-project').setAttribute('aria-label','View '+p.name+' project');advanceProjectFilm(p);}
tabs.forEach((b,i)=>{b.addEventListener('click',()=>{if(touchProjects){selectProject(i);return;}if(i===0){window.location.href='ai-pilot.html';return;}if(i===1){window.location.href='ai-optimization.html';return;}if(i===2){window.location.href='e-workflow.html';return;}selectProject(i);});b.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(i+1)%3;else if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(i+2)%3;else if(e.key==='Home')n=0;else if(e.key==='End')n=2;else return;e.preventDefault();selectProject(n);tabs[n].focus();});});document.querySelector('#open-project').onclick=()=>{if(selected===0){window.location.href='ai-pilot.html';return;}if(selected===1){window.location.href='ai-optimization.html';return;}if(selected===2){window.location.href='e-workflow.html';return;}showInfo(projects[selected].name,'The full case study is coming soon. Get in touch to learn more about this project.');};
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
 tab.addEventListener('focus',()=>{if(!touchProjects)selectProject(index);});
});
const projectScroll=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)selectProject(Number(entry.target.dataset.project));}},{rootMargin:'-40% 0px -40% 0px',threshold:0});
if(!touchProjects)tabs.forEach(tab=>projectScroll.observe(tab));

// Keep all travel photos in a circular deck; lock only during the short turn.
const photoDeck=document.querySelector('.photo-deck');
const deckCards=[...photoDeck.querySelectorAll('.polaroid-card')];
let deckBusy=false,deckTurns=0;
function loadUpcomingCards(){deckCards.slice(0,9).forEach(card=>{const img=card.querySelector('img');if(img.dataset.src){if(img.dataset.srcset){img.srcset=img.dataset.srcset;delete img.dataset.srcset;}img.src=img.dataset.src;delete img.dataset.src;} });}
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
 // Touch selection updates immediately; no decode or audio gate before feedback.
 if(touchProjects){
  filmImage.src=project.preview;filmImage.alt=project.name+' project cover';
  const next=getProjectImage(project);
  next.decode().then(()=>{if(request===filmRequest)filmImage.src=project.image;}).catch(()=>{});
  return;
 }
 const next=getProjectImage(project);
 try{await next.decode();}catch{return;}
 if(request!==filmRequest)return;
 playFilmSound();
 if(reducedMotion||mobileEffects){filmImage.style.backgroundImage='none';filmImage.src=project.image;filmImage.alt=project.name+' project cover';return;}
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
  filmImage.style.backgroundImage='none';filmImage.src=project.image;filmImage.alt=project.name+' project cover';
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
if(!reducedMotion&&!mobileEffects){
 const journey=document.querySelector('.film-experience');
 let journeyFrame=0,lastJourneyProgress=-1;
 const updateJourneyShape=()=>{
  journeyFrame=0;
  const rect=journey.getBoundingClientRect();
  if(rect.bottom<0||rect.top>innerHeight)return;
  const top=rect.top;
  const progress=Math.min(1,Math.max(0,(innerHeight-top)/(innerHeight*.6)));
  if(progress===lastJourneyProgress)return;
  lastJourneyProgress=progress;
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
 addEventListener('resize',()=>{lastJourneyProgress=-1;queueJourneyShape();});
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
if(!reducedMotion&&!mobileEffects){
 const landscape=document.querySelector('.contact-landscape');
 const finalLine=document.querySelector('.contact-statement .line-four');
 let contactFrame=0;
 const updateContactMotion=()=>{
  contactFrame=0;
  const rect=landscape.getBoundingClientRect();
  if(rect.bottom<0||rect.top>innerHeight)return;
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
if(!reducedMotion&&!mobileEffects){
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
   dot.style.transform=`translate3d(${cursorX}px,${cursorY}px,0) translate(-50%,-50%)`;
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
  const count=mobileEffects?8:(panel.matches('.contact-footer')?14:28);
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

// Mobile webviews can postpone native lazy images until after a fast swipe.
if(mobileEffects){
 const upcomingImages=[...document.querySelectorAll('#about img,#experience img,#projects img,#contact img')];
 upcomingImages.forEach(img=>{img.loading='eager';if(img.fetchPriority!=='high')img.fetchPriority='low';});
 projects.forEach(getProjectImage);
}
