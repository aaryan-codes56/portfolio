// Personal details and links. This file has no Vite-specific imports so that
// the build script in scripts/ can read it too.

export const site = {
  name: 'Aaryan Krishna',
  url: 'https://aaryankrishna.vercel.app',
  title: 'Aaryan Krishna: full-stack and AI engineering portfolio',
  description:
    'Aaryan Krishna builds full-stack products and the AI systems behind them. B.Tech AI student, class of 2028, open to software, full-stack, data and AI/ML internships.',
  headline: 'I build full-stack products and the AI systems behind them.',
  intro:
    'B.Tech Artificial Intelligence student at Newton School of Technology, Rishihood University. Open to software, frontend, full-stack, data and AI/ML internships.',
  email: 'aaryankrishna009@gmail.com',
  resume: '/Aaryan-Krishna-Resume.pdf',
  links: {
    github: 'https://github.com/aaryan-codes56',
    linkedin: 'https://www.linkedin.com/in/aaryan-krishna-840217317/',
    leetcode: 'https://leetcode.com/u/DIpiow8PMa/',
  },
  // EmailJS IDs are public by design: they ship in the browser bundle and
  // EmailJS restricts use by allowed origin. Override them with env vars if needed.
  emailjs: {
    serviceId: import.meta.env?.VITE_EMAILJS_SERVICE_ID ?? 'service_m9fyxlc',
    templateId: import.meta.env?.VITE_EMAILJS_TEMPLATE_ID ?? 'template_l5p4u8c',
    publicKey: import.meta.env?.VITE_EMAILJS_PUBLIC_KEY ?? '59otIpNtYXAeHB2vo',
  },
};

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
