const discord="https://discord.gg/H9PWDrNjB4";
document.querySelectorAll("[data-discord]").forEach(x=>x.href=discord);
function setLang(lang){document.body.dataset.lang=lang;document.documentElement.lang=lang;document.querySelectorAll("[data-set-lang]").forEach(b=>b.classList.toggle("active",b.dataset.setLang===lang));const t=document.documentElement.dataset["title"+lang];if(t)document.title=t;const d=document.querySelector('meta[name="description"]');const md=document.documentElement.dataset["desc"+lang];if(d&&md)d.content=md;}
const stored=(()=>{try{return localStorage.getItem("krystain-lang")}catch{return null}})();
const detected=stored||((navigator.language||"en").toLowerCase().startsWith("pl")?"pl":"en");
setLang(detected);
document.querySelectorAll("[data-set-lang]").forEach(b=>b.addEventListener("click",()=>{try{localStorage.setItem("krystain-lang",b.dataset.setLang)}catch{}setLang(b.dataset.setLang)}));
const copy=document.querySelector("#copy-ip");if(copy)copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("krystian.seedloaf.gg");copy.textContent="COPIED ✓";setTimeout(()=>copy.textContent="COPY IP",1500)}catch{prompt("Copy server address:","krystian.seedloaf.gg")}});