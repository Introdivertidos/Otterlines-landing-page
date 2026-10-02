const contactForm = document.querySelector('#contact-form');
const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
const languageSwitch = document.querySelector('[data-language-switch]');

const updateLanguageSwitch = () => {
  if (languageSwitch) {
    languageSwitch.href = `${isEnglish ? 'index.html' : 'en.html'}${window.location.hash}`;
  }
};

updateLanguageSwitch();
window.addEventListener('hashchange', updateLanguageSwitch);

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const topic = String(data.get('topic') || '').trim();
  const message = String(data.get('message') || '').trim();

  const subject = `Otterlines — ${topic}`;
  const body = [
    `${isEnglish ? 'Name' : 'Nome'}: ${name || (isEnglish ? 'Not provided' : 'Não informado')}`,
    `${isEnglish ? 'Reply-to email' : 'Email para resposta'}: ${email}`,
    '',
    message,
  ].join('\n');

  window.location.href = `mailto:otterlines.app@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
