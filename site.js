const discord="https://discord.gg/H9PWDrNjB4";
document.querySelectorAll("[data-discord]").forEach(x=>x.href=discord);
function setLang(lang){
  document.body.dataset.lang=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-set-lang]").forEach(b=>b.classList.toggle("active",b.dataset.setLang===lang));
  const t=document.documentElement.dataset["title"+lang];
  if(t)document.title=t;
  const d=document.querySelector('meta[name="description"]');
  const md=document.documentElement.dataset["desc"+lang];
  if(d&&md)d.content=md;
}
const stored=(()=>{try{return localStorage.getItem("krystian-lang")}catch{return null}})();
const detected=stored||((navigator.language||"en").toLowerCase().startsWith("pl")?"pl":"en");
setLang(detected);
document.querySelectorAll("[data-set-lang]").forEach(b=>b.addEventListener("click",()=>{
  try{localStorage.setItem("krystian-lang",b.dataset.setLang)}catch{}
  setLang(b.dataset.setLang);
}));
document.querySelectorAll(".copy-btn, [data-copy]").forEach(btn=>{
  btn.addEventListener("click",async()=>{
    const text=btn.dataset.copy||btn.getAttribute("data-copy")||"gg.evade.in:25567";
    const originalText=btn.textContent;
    try{
      await navigator.clipboard.writeText(text);
      btn.textContent="COPIED ✓";
      setTimeout(()=>btn.textContent=originalText,1500);
    }catch{
      prompt("Copy server address:",text);
    }
  });
});
