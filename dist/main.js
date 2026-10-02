const contactForm = document.querySelector('#contact-form');

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
    `Nome: ${name || 'Não informado'}`,
    `Email para resposta: ${email}`,
    '',
    message,
  ].join('\n');

  window.location.href = `mailto:otterlines.app@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
