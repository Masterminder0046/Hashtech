// ------ HELPERS: $ = querySelector, $$ = querySelectorAll, R = <html> element ------
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],R=document.documentElement;
// ------ Every .call button opens WhatsApp with a ready message ------
$$(".call").forEach(a=>{a.href="https://wa.me/917708182774?text="+encodeURIComponent("Hi Hash_Tech, I'd like to book a free call.");a.target="_blank";a.rel="noopener"});
// ------ SOCIAL ICONS: one list builds all the icon links ------
const SO=[["https://www.linkedin.com/in/sheik-tech/","linkedin","LinkedIn"],["https://github.com/Masterminder0046","github","GitHub"],["https://www.instagram.com/_hash_tech/","instagram","Instagram"],["mailto:sheikmohamed0046@gmail.com","mail","Email"]];
$(".so").innerHTML=SO.map(s=>`<a href="${s[0]}" target="_blank" rel="noopener" aria-label="${s[2]}" title="${s[2]}"><i data-lucide="${s[1]}"></i></a>`).join("");
// ------ Turns every <i data-lucide=...> tag into an SVG icon ------
lucide.createIcons();
// ------ BOARDING PASS: drag the plane knob to the end to open the site ------
const kn=$("#kn"),sw=$("#sw");let dr=0,x0=0,mx=0,cx=0;
function board(){$("#gt").classList.add("o");document.body.classList.remove("lock")}
kn.onpointerdown=e=>{dr=1;x0=e.clientX;mx=sw.clientWidth-kn.offsetWidth-8;kn.setPointerCapture(e.pointerId)};
kn.onpointermove=e=>{if(!dr)return;cx=Math.max(0,Math.min(mx,e.clientX-x0));kn.style.transform=`translateX(${cx}px)`;sw.style.setProperty("--x",cx+"px")};
kn.onpointerup=()=>{if(!dr)return;dr=0;if(cx>mx*.85)board();else{cx=0;kn.style.transition="transform .3s";kn.style.transform="";sw.style.setProperty("--x","0px");setTimeout(()=>kn.style.transition="",300)}};
kn.onkeydown=e=>{if(e.key=="Enter"||e.key==" ")board()};
// ------ WINDOW SHADE: toggles light / dark theme ------
$("#wn").onclick=()=>{const d=R.dataset.theme=="dark";d?delete R.dataset.theme:R.dataset.theme="dark"};
// ------ SCROLL: updates progress (--p), altitude, flight phase and the timeline ------
const PH=["Departure","Climb","Cruise","Descent","Landing"];
function sc(){const h=R.scrollHeight-innerHeight,p=h>0?Math.min(1,scrollY/h):0;R.style.setProperty("--p",p);$("#pb").style.setProperty("--p",p);
$("#al").textContent=(Math.round(32000*Math.sin(Math.PI*p)/100)*100).toLocaleString("en-US");$("#ph").textContent=PH[Math.min(4,Math.floor(p*5))];
const f=$("#fp").getBoundingClientRect(),q=Math.min(1,Math.max(0,(innerHeight*.6-f.top)/f.height));$("#fl").style.height=`calc((100% - 12px)*${q})`;
$$(".wp").forEach((w,i)=>w.classList.toggle("on",q>i/4+.02))}
addEventListener("scroll",sc,{passive:true});addEventListener("resize",sc);sc();
// ------ REVEAL: adds .in to .rv elements when they enter the screen ------
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.15});
$$(".rv").forEach((e,i)=>{e.style.transitionDelay=(i%4)*.08+"s";io.observe(e)});
// ------ LIVE CLOCK: India time in the footer ------
const ck=()=>$("#ck").textContent=new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit"});ck();setInterval(ck,30000);
