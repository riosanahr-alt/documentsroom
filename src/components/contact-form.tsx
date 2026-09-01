import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { sendLead } from "@/lib/send-lead";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || !email.includes("@") || message.length < 8) {
      setErr(t(ui.form.contactErr));
      return;
    }
    setSending(true);
    setErr("");
    try {
      await sendLead({
        data: {
          source: "contact",
          name,
          email,
          phone,
          service,
          details: message,
        },
      });
      setSent(true);
    } catch {
      setErr(t(ui.form.sendFail));
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8">
        <h3 className="text-xl font-semibold text-emerald">{t(ui.form.contactSent)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t(ui.form.contactSentText)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-line bg-paper p-6 md:p-8">
      <label className="text-sm font-medium text-emerald">
        {t(ui.form.name)}
        <input
          name="name"
          required
          className="mt-1.5 h-12 w-full rounded-xl border border-line bg-ivory px-4 text-sm outline-none focus:border-gold"
        />
      </label>
      <label className="text-sm font-medium text-emerald">
        {t(ui.form.email)}
        <input
          name="email"
          type="email"
          required
          className="mt-1.5 h-12 w-full rounded-xl border border-line bg-ivory px-4 text-sm outline-none focus:border-gold"
        />
      </label>
      <label className="text-sm font-medium text-emerald">
        {t(ui.form.phone)}
        <input
          name="phone"
          type="tel"
          className="mt-1.5 h-12 w-full rounded-xl border border-line bg-ivory px-4 text-sm outline-none focus:border-gold"
        />
      </label>
      <label className="text-sm font-medium text-emerald">
        {t(ui.form.service)}
        <select
          name="service"
          className="mt-1.5 h-12 w-full rounded-xl border border-line bg-ivory px-4 text-sm outline-none focus:border-gold"
          defaultValue=""
        >
          <option value="">{t(ui.form.notSure)}</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {t(s.title)}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-emerald">
        {t(ui.form.question)}
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
        />
      </label>
      {err ? <p className="text-sm text-red-800">{err}</p> : null}
      <Button type="submit" className="mt-2" disabled={sending}>
        {sending ? t(ui.form.sending) : t(ui.common.send)}
      </Button>
    </form>
  );
}
