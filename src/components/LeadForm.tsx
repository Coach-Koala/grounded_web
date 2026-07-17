"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({ defaultAudience = "employer" }: { defaultAudience?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = process.env.NEXT_PUBLIC_LEADS_ENDPOINT;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getgroundedhealth.com";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Free scorecard request")}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill the hidden field; drop silently without a request.
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(10_000),
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          audience: data.get("audience"),
          message: data.get("message"),
        }),
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="bg-positive-soft rounded-xl p-8">
        <p className="text-ink text-xl font-semibold">Request received.</p>
        <p className="text-ink mt-2">
          We&apos;ll be in touch shortly to start your scorecard. No prep needed on your side.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      {status === "error" ? (
        <div role="alert" className="bg-critical-soft border-critical/40 rounded-lg border p-4">
          <p className="text-ink font-semibold">
            Something went wrong on our end — your request was not sent.
          </p>
          <p className="text-ink mt-1 text-sm">
            Email us directly instead:{" "}
            <a href={mailto} className="text-spruce font-semibold underline">
              {contactEmail}
            </a>
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-spruce">Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="border-line focus:border-spruce mt-1 w-full rounded-lg border bg-white p-3 outline-none"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-spruce">Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border-line focus:border-spruce mt-1 w-full rounded-lg border bg-white p-3 outline-none"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-spruce">Company</span>
          <input
            name="company"
            type="text"
            required
            autoComplete="organization"
            className="border-line focus:border-spruce mt-1 w-full rounded-lg border bg-white p-3 outline-none"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-spruce">I am</span>
          <select
            name="audience"
            defaultValue={defaultAudience}
            className="border-line focus:border-spruce mt-1 w-full rounded-lg border bg-white p-3 outline-none"
          >
            <option value="employer">A self-insured employer</option>
            <option value="advisor">A benefits advisor</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="eyebrow text-spruce">Anything specific? (optional)</span>
        <textarea
          name="message"
          rows={3}
          className="border-line focus:border-spruce mt-1 w-full rounded-lg border bg-white p-3 outline-none"
        />
      </label>

      {/* Honeypot — hidden from real users, attractive to bots. */}
      <label aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-spruce hover:bg-spruce w-full rounded-lg px-6 py-3 text-lg font-semibold text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Get your free scorecard"}
      </button>
      <p className="text-muted text-xs">
        No sales sequence. One email to kick off your scorecard, nothing else.
      </p>
    </form>
  );
}
