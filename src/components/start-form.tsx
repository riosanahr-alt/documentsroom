import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import { ui } from "@/i18n/copy";
import { useLocale } from "@/i18n/locale";
import { sendLead } from "@/lib/send-lead";
import { cn } from "@/lib/cn";
import { Check, ChevronLeft, ChevronRight, Paperclip } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";

type Draft = {
  service: string;
  details: string;
  files: string[];
  name: string;
  email: string;
  phone: string;
  pay: string;
  agree: boolean;
};

const empty: Draft = {
  service: "",
  details: "",
  files: [],
  name: "",
  email: "",
  phone: "",
  pay: "",
  agree: false,
};

const PAY_KEYS = ["card", "zelle", "paypal", "bank", "cash"] as const;

export function StartForm() {
  const { t } = useLocale();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<Draft>(empty);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const stepLabels = ui.form.steps;
  const payOpts = ui.form.payOpts;

  const canNext = useMemo(() => {
    if (step === 0) return Boolean(draft.service);
    if (step === 1) return draft.details.trim().length > 12;
    if (step === 2) return true;
    if (step === 3)
      return draft.name.trim().length > 1 && draft.email.includes("@") && draft.phone.trim().length > 6;
    if (step === 4) return Boolean(draft.pay) && draft.agree;
    return false;
  }, [draft, step]);

  useEffect(() => {
    document.getElementById("start-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function onFiles(list: FileList | null) {
    if (!list) return;
    const names = Array.from(list).map((f) => f.name);
    setDraft((d) => ({ ...d, files: [...d.files, ...names].slice(0, 12) }));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!canNext) {
      setError(t(ui.form.complete));
      return;
    }
    setSending(true);
    setError("");
    try {
      await sendLead({
        data: {
          source: "start",
          name: draft.name,
          email: draft.email,
          phone: draft.phone,
          service: draft.service,
          details: draft.details,
          pay: draft.pay,
          files: draft.files,
        },
      });
      setDone(true);
    } catch {
      setError(t(ui.form.sendFail));
    } finally {
      setSending(false);
    }
  }

  if (done) {
    const thanks = t(ui.form.thanks)
      .replace("{email}", draft.email || t(ui.form.yourEmail))
      .replace("{pay}", t(payOpts[PAY_KEYS.indexOf(draft.pay as (typeof PAY_KEYS)[number])] ?? ui.form.payOpts[0]));
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 text-center md:p-12">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-emerald text-ivory">
          <Check className="size-6" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold text-emerald">{t(ui.form.received)}</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">{thanks}</p>
        <p className="mt-4 text-sm text-muted">
          {t(ui.form.talk)}{" "}
          <a className="text-emerald underline-offset-4 hover:underline" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form id="start-form" onSubmit={submit} className="scroll-mt-24 rounded-2xl border border-line bg-paper p-5 shadow-soft md:p-8">
      <ol className="mb-8 flex gap-2 overflow-x-auto">
        {stepLabels.map((label, i) => (
          <li key={label.en} className="flex flex-1 flex-col gap-2">
            <span className={cn("h-1 rounded-full", i <= step ? "bg-emerald" : "bg-line")} aria-hidden />
            <span className={cn("text-[11px] uppercase tracking-[0.14em]", i === step ? "text-emerald" : "text-muted")}>
              {t(label)}
            </span>
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <fieldset className="grid gap-2 sm:grid-cols-2">
          <legend className="mb-4 text-lg font-semibold text-emerald">{t(ui.form.which)}</legend>
          {SERVICES.map((s) => (
            <label
              key={s.slug}
              className={cn(
                "cursor-pointer rounded-xl border px-4 py-3 text-sm transition-colors",
                draft.service === s.slug
                  ? "border-emerald bg-ivory-2 text-emerald"
                  : "border-line hover:border-gold/60",
              )}
            >
              <input
                type="radio"
                className="sr-only"
                name="service"
                value={s.slug}
                checked={draft.service === s.slug}
                onChange={() => setDraft((d) => ({ ...d, service: s.slug }))}
              />
              <span className="block font-medium">{t(s.title)}</span>
              <span className="mt-1 block text-xs text-muted">{t(s.kicker)}</span>
            </label>
          ))}
        </fieldset>
      ) : null}

      {step === 1 ? (
        <div>
          <label htmlFor="details" className="text-lg font-semibold text-emerald">
            {t(ui.form.describe)}
          </label>
          <p className="mt-1 text-sm text-muted">{t(ui.form.describeHint)}</p>
          <textarea
            id="details"
            required
            rows={7}
            className="mt-4 w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
            value={draft.details}
            onChange={(e) => setDraft((d) => ({ ...d, details: e.target.value }))}
            placeholder={t(ui.form.describePh)}
          />
        </div>
      ) : null}

      {step === 2 ? (
        <div>
          <p className="text-lg font-semibold text-emerald">{t(ui.form.files)}</p>
          <p className="mt-1 text-sm text-muted">{t(ui.form.filesHint)}</p>
          <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-line-strong bg-ivory px-4 py-10 text-sm text-muted hover:border-gold">
            <Paperclip className="mb-2 size-5 text-gold" />
            {t(ui.form.choose)}
            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="sr-only"
              onChange={(e) => onFiles(e.target.files)}
            />
          </label>
          {draft.files.length ? (
            <ul className="mt-4 space-y-1 text-sm text-charcoal">
              {draft.files.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4">
          <p className="text-lg font-semibold text-emerald">{t(ui.form.reach)}</p>
          <Field label={t(ui.form.name)} value={draft.name} onChange={(v) => setDraft((d) => ({ ...d, name: v }))} />
          <Field
            label={t(ui.form.email)}
            type="email"
            value={draft.email}
            onChange={(v) => setDraft((d) => ({ ...d, email: v }))}
          />
          <Field
            label={t(ui.form.phone)}
            type="tel"
            value={draft.phone}
            onChange={(v) => setDraft((d) => ({ ...d, phone: v }))}
          />
        </div>
      ) : null}

      {step === 4 ? (
        <div>
          <p className="text-lg font-semibold text-emerald">{t(ui.form.pay)}</p>
          <p className="mt-1 text-sm text-muted">{t(ui.form.payHint)}</p>
          <div className="mt-4 grid gap-2">
            {PAY_KEYS.map((key, i) => (
              <label
                key={key}
                className={cn(
                  "flex cursor-pointer items-center rounded-xl border px-4 py-3 text-sm",
                  draft.pay === key ? "border-emerald bg-ivory-2" : "border-line",
                )}
              >
                <input
                  type="radio"
                  className="mr-3 accent-emerald"
                  name="pay"
                  checked={draft.pay === key}
                  onChange={() => setDraft((d) => ({ ...d, pay: key }))}
                />
                {t(payOpts[i])}
              </label>
            ))}
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm text-muted">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-emerald"
              checked={draft.agree}
              onChange={(e) => setDraft((d) => ({ ...d, agree: e.target.checked }))}
            />
            <span>{t(ui.form.agree)}</span>
          </label>
        </div>
      ) : null}

      {error ? <p className="mt-4 text-sm text-red-800">{error}</p> : null}

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setError("");
            setStep((s) => Math.max(0, s - 1));
          }}
          disabled={step === 0}
        >
          <ChevronLeft className="size-4" />
          {t(ui.common.back)}
        </Button>
        {step < stepLabels.length - 1 ? (
          <Button
            type="button"
            onClick={() => {
              if (!canNext) {
                setError(t(ui.form.complete));
                return;
              }
              setError("");
              setStep((s) => s + 1);
            }}
          >
            {t(ui.common.continue)}
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={sending}>
            {sending ? t(ui.form.sending) : t(ui.form.sendReq)}
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium text-emerald">
      {label}
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 h-12 w-full rounded-xl border border-line bg-ivory px-4 text-sm text-charcoal outline-none focus:border-gold"
      />
    </label>
  );
}
