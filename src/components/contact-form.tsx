"use client";

import { useActionState } from "react";

import { initialContactState, submitContactForm } from "@/app/actions/contact";

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <p className="text-xs text-rose-200" role="alert">
      {errors[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactState);

  return (
    <form action={formAction} className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span>Name</span>
          <input
            className="w-full rounded-lg border border-white/20 bg-surface px-3 py-2"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(state.fieldErrors?.name)}
          />
          <FieldError errors={state.fieldErrors?.name} />
        </label>

        <label className="space-y-1 text-sm">
          <span>Email</span>
          <input
            className="w-full rounded-lg border border-white/20 bg-surface px-3 py-2"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(state.fieldErrors?.email)}
          />
          <FieldError errors={state.fieldErrors?.email} />
        </label>
      </div>

      <label className="space-y-1 text-sm">
        <span>Subject</span>
        <input
          className="w-full rounded-lg border border-white/20 bg-surface px-3 py-2"
          name="subject"
          required
          aria-invalid={Boolean(state.fieldErrors?.subject)}
        />
        <FieldError errors={state.fieldErrors?.subject} />
      </label>

      <label className="space-y-1 text-sm">
        <span>Message</span>
        <textarea
          className="min-h-32 w-full rounded-lg border border-white/20 bg-surface px-3 py-2"
          name="message"
          required
          aria-invalid={Boolean(state.fieldErrors?.message)}
        />
        <FieldError errors={state.fieldErrors?.message} />
      </label>

      <label className="hidden" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" name="website" />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Sending..." : "Send message"}
      </button>

      {state.status !== "idle" ? (
        <p
          className={`text-sm ${state.status === "success" ? "text-emerald-200" : "text-rose-200"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
