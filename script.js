
const CONFIG = window.AQ_CONFIG || { supabaseUrl: "", supabaseAnonKey: "", whatsappNumber: "919622419388" };
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
document.addEventListener('DOMContentLoaded', () => {
  const year=$('#year'); if(year) year.textContent=new Date().getFullYear();
  $$('.faq-q').forEach(b=>b.addEventListener('click',()=>{const a=b.nextElementSibling; a.hidden=!a.hidden; b.setAttribute('aria-expanded',String(!a.hidden));}));
});
function waLink(message){ return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`; }
async function saveAppointment(data){
  let saved=false;
  if(CONFIG.supabaseUrl && CONFIG.supabaseAnonKey && window.supabase){
    try{
      const client=window.supabase.createClient(CONFIG.supabaseUrl,CONFIG.supabaseAnonKey);
      const {error}=await client.from('appointment_requests').insert([data]);
      if(error) throw error; saved=true;
    }catch(e){ console.error('Appointment save failed:',e); }
  }
  return saved;
}
