import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const emailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export async function sendEmail(form: { name: string; email: string; message: string }) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return { ok: false, message: 'The form isn’t configured right now. Please email me directly.' };
  }
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { from_name: form.name, from_email: form.email, message: form.message, to_name: 'Jonny' },
      PUBLIC_KEY,
    );
    return { ok: true, message: 'Thanks! Your message is in. I’ll reply within a day or two.' };
  } catch (err) {
    const detail = err && typeof err === 'object' && 'text' in err ? (err as { status?: number; text?: string }) : err;
    console.error('[contact] EmailJS send failed', detail);
    return { ok: false, message: 'Something went wrong sending that. Please email me directly.' };
  }
}
