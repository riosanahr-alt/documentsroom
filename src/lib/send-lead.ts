import { createServerFn } from "@tanstack/react-start";

export type Lead = {
  source: "start" | "contact";
  name: string;
  email: string;
  phone?: string;
  service?: string;
  details?: string;
  pay?: string;
  files?: string[];
};

function formatLead(data: Lead) {
  const lines = [
    data.source === "start" ? "DOCROOM — новая заявка" : "DOCROOM — сообщение с сайта",
    "",
    data.name ? `Имя: ${data.name}` : "",
    data.email ? `Email: ${data.email}` : "",
    data.phone ? `Телефон: ${data.phone}` : "",
    data.service ? `Услуга: ${data.service}` : "",
    data.pay ? `Оплата: ${data.pay}` : "",
    data.files?.length ? `Файлы: ${data.files.join(", ")}` : "",
    data.details ? `\n${data.details}` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

export const sendLead = createServerFn({ method: "POST" })
  .validator((d: Lead) => d)
  .handler(async ({ data }) => {
    const text = formatLead(data);
    let telegram = false;
    let email = false;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat = process.env.TELEGRAM_CHAT_ID;
    if (token && chat) {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat,
          text,
          disable_web_page_preview: true,
        }),
      });
      telegram = res.ok;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/riosanahr@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: data.source === "start" ? "DOCROOM — новая заявка" : "DOCROOM — сообщение с сайта",
          _template: "box",
          _captcha: "false",
          name: data.name,
          email: data.email,
          phone: data.phone || "",
          service: data.service || "",
          pay: data.pay || "",
          files: data.files?.join(", ") || "",
          message: data.details || "",
        }),
      });
      email = res.ok;
    } catch {
      email = false;
    }

    if (!telegram && !email) {
      throw new Error("delivery-failed");
    }

    return { ok: true as const, telegram, email };
  });
