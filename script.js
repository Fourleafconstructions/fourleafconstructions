// Business email for customer enquiries.
const BUSINESS_EMAIL = 'fourleafconstructions@outlook.com';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? '✕' : '☰'; });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
 event.preventDefault();
 const form = new FormData(event.currentTarget);
 const subject = `Website enquiry: ${form.get('type')}`;
 const body = `Name: ${form.get('name')}\nPhone: ${form.get('phone')}\nEmail: ${form.get('email')}\nProject type: ${form.get('type')}\n\nProject details:\n${form.get('message')}`;
 window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
