
const cfg = window.RIMAL_CONFIG;

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) el.textContent = value;
}
function setHref(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.href = value;
}
function fillConfig() {
  setText("companyNameAr", cfg.company.nameAr);
  setText("companyNameEn", cfg.company.nameEn);
  setText("sloganAr", cfg.company.sloganAr);
  setText("sloganEn", cfg.company.sloganEn);

  document.querySelectorAll("[data-primary-phone]").forEach(el => el.textContent = cfg.contact.phonePrimaryDisplay);
  document.querySelectorAll("[data-secondary-phone]").forEach(el => el.textContent = cfg.contact.phoneSecondaryDisplay);
  document.querySelectorAll("[data-email-primary]").forEach(el => el.textContent = cfg.contact.emailPrimary);
  document.querySelectorAll("[data-email-business]").forEach(el => el.textContent = cfg.contact.emailBusiness);

  document.querySelectorAll("[data-primary-phone-link]").forEach(el => el.href = "tel:" + cfg.contact.phonePrimaryTel);
  document.querySelectorAll("[data-secondary-phone-link]").forEach(el => el.href = "tel:" + cfg.contact.phoneSecondaryTel);
  document.querySelectorAll("[data-email-primary-link]").forEach(el => el.href = "mailto:" + cfg.contact.emailPrimary);
  document.querySelectorAll("[data-email-business-link]").forEach(el => el.href = "mailto:" + cfg.contact.emailBusiness);
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => el.href = "https://wa.me/" + cfg.contact.whatsappNumber);
  document.querySelectorAll("[data-facebook-link]").forEach(el => el.href = cfg.contact.facebook);

  setText("sourceTitleAr", cfg.sandSources.sourceTitleAr);
  setText("sourceTitleEn", cfg.sandSources.sourceTitleEn);
  setText("sourceBodyAr", cfg.sandSources.sourceBodyAr);
  setText("sourceBodyEn", cfg.sandSources.sourceBodyEn);

  setText("headOfficeAr", cfg.companyDetails.headOfficeAr);
  setText("headOfficeEn", cfg.companyDetails.headOfficeEn);
  setText("registrationAr", "سجل تجاري رقم " + cfg.companyDetails.commercialRegistration);
  setText("registrationEn", "Commercial Registration No. " + cfg.companyDetails.commercialRegistration);
  setText("branch1Ar", cfg.companyDetails.branch1Ar);
  setText("branch1En", cfg.companyDetails.branch1En);
  setText("branch2Ar", cfg.companyDetails.branch2Ar);
  setText("branch2En", cfg.companyDetails.branch2En);
}

const body=document.body,arBtn=document.getElementById('arBtn'),enBtn=document.getElementById('enBtn');
function setLang(lang){
  const en=lang==='en';
  body.classList.toggle('en',en);
  document.documentElement.lang=en?'en':'ar';
  document.documentElement.dir=en?'ltr':'rtl';
  arBtn.classList.toggle('active',!en);
  enBtn.classList.toggle('active',en);
  localStorage.setItem('rimal-lang',lang);
}
arBtn.onclick=()=>setLang('ar');
enBtn.onclick=()=>setLang('en');
setLang(localStorage.getItem('rimal-lang')||'ar');
fillConfig();

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const text=`طلب عرض سعر - Rimal Al-Ard
Name / الاسم: ${document.getElementById('name').value}
Phone / الهاتف: ${document.getElementById('phone').value}
Requirement / الطلب: ${document.getElementById('type').value}
Location / الموقع: ${document.getElementById('location').value}
Quantity & Details / الكمية والتفاصيل:
${document.getElementById('details').value}`;
  window.open('https://wa.me/'+cfg.contact.whatsappNumber+'?text='+encodeURIComponent(text),'_blank');
});

const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{
  lbImg.src=btn.dataset.src;
  lbImg.alt=body.classList.contains('en')?btn.dataset.en:btn.dataset.ar;
  lb.classList.add('open');
}));
document.getElementById('closeLightbox').onclick=()=>lb.classList.remove('open');
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
