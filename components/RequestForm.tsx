"use client";

import { useState } from "react";
import { business } from "@/content/site";

const serviceTypes = [
  "Water Damage Restoration",
  "Flood Cleanup",
  "Storm Damage",
  "Burst Pipe Cleanup",
  "Structural Drying",
  "Sewage Cleanup",
  "Mold Remediation",
  "Fire & Smoke Cleanup",
  "Other",
];

const urgencyOptions = [
  "Emergency (now)",
  "Urgent (today)",
  "Soon (next 1-2 days)",
  "Planning (this week)",
];

export function RequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: payload.fullName,
        phone: payload.phone,
        email: payload.email,
        serviceAddress: payload.serviceAddress,
        serviceType: payload.serviceType,
        urgency: payload.urgency,
        description: payload.description,
        consent: payload.consent === "on",
      }),
    });

    if (response.ok) {
      setStatus("success");
      setMessage("Request received. Our team will contact you shortly.");
      form.reset();
    } else {
      setStatus("error");
      setMessage("Please complete all required fields and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Full Name *
          <input
            name="fullName"
            required
            className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          Phone *
          <input
            name="phone"
            required
            className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          Email (optional)
          <input name="email" type="email" className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm" />
        </label>
        <label className="text-sm font-semibold text-ink">
          Service Address *
          <input
            name="serviceAddress"
            required
            className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Service Type *
          <select name="serviceType" required className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm">
            <option value="">Select a service</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-ink">
          Urgency *
          <select name="urgency" required className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm">
            <option value="">Select urgency</option>
            {urgencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="text-sm font-semibold text-ink">
        Description *
        <textarea
          name="description"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-border px-4 py-2 text-sm"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I agree to be contacted by Flood Doctor regarding this request. For emergencies, call {business.phone}.
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit Request"}
        </button>
        {message ? <span className="text-sm text-muted">{message}</span> : null}
      </div>
    </form>
  );
}
