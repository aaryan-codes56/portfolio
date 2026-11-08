import { useRef, useState } from 'react';
import { site } from '../../data/site';
import { Icon } from '../Icon/Icon';
import './Contact.css';

const COPIED_FOR_MS = 2000;

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), COPIED_FOR_MS);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const send = async (event) => {
    event.preventDefault();

    // Bots fill the hidden field. Pretend it worked and send nothing.
    if (form.current.elements.company.value) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm(site.emailjs.serviceId, site.emailjs.templateId, form.current, {
        publicKey: site.emailjs.publicKey,
      });
      form.current.reset();
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="page contact__inner">
        <div>
          <h2 className="contact__title">Get in touch</h2>
          <p className="contact__text">
            Open to internships and new opportunities. Send a role description or a link to your team, and I will take it from there.
          </p>

          <div className="contact__email">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <button type="button" onClick={copyEmail} aria-label={copied ? 'Email address copied' : 'Copy email address'}>
              <Icon name={copied ? 'check' : 'copy'} size={18} />
            </button>
          </div>

          <ul className="contact__links">
            <li><a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={site.resume} download>Download resume</a></li>
          </ul>
        </div>

        <form ref={form} className="form" onSubmit={send}>
          <div className="form__field">
            <label htmlFor="user_name">Name</label>
            <input id="user_name" name="user_name" autoComplete="name" required />
          </div>
          <div className="form__field">
            <label htmlFor="user_email">Email</label>
            <input id="user_email" name="user_email" type="email" autoComplete="email" required />
          </div>
          <div className="form__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <div className="form__trap" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" className="form__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending message' : 'Send message'}
          </button>

          <p className="form__status" role="status">
            {status === 'sent' && 'Message sent. I will reply by email.'}
            {status === 'failed' && `Message not sent. Email me at ${site.email} instead.`}
          </p>
        </form>
      </div>
    </section>
  );
}
