"use client";

import * as React from "react";
import { Mail, FileText, Copy, Check, Send, Loader2 } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { config } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { useToast } from "@/components/shared/toast";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
type Errors = Partial<Record<keyof FormState, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!emailRegex.test(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.trim().length < 20)
    errors.message = "Message should be at least 20 characters.";
  return errors;
}

function ContactCard() {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.email);
      setCopied(true);
      toast("Email copied to clipboard", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Couldn't copy email", "error");
    }
  };

  const links = [
    { label: "GitHub", value: "@SIVARAMYENUGULA", href: config.github, icon: Github },
    { label: "LinkedIn", value: "in/sivaramyenugula", href: config.linkedin, icon: Linkedin },
    { label: "Resume", value: "Download PDF", href: config.resume, icon: FileText },
  ];

  return (
    <Card className="h-full p-6 sm:p-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Reach me directly
      </h3>

      <button
        onClick={copyEmail}
        className="group mt-4 flex w-full items-center gap-3 rounded-lg border border-border bg-muted/40 p-3.5 text-left transition-colors hover:border-accent/50"
      >
        <span className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-accent">
          <Mail className="size-4" />
        </span>
        <span className="flex-1 overflow-hidden">
          <span className="block text-[11px] text-muted-foreground">Email</span>
          <span className="block truncate text-sm text-foreground">
            {config.email}
          </span>
        </span>
        {copied ? (
          <Check className="size-4 text-emerald-500" />
        ) : (
          <Copy className="size-4 text-muted-foreground group-hover:text-foreground" />
        )}
      </button>

      <div className="mt-3 grid gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 rounded-lg border border-border bg-muted/40 p-3.5 transition-colors hover:border-accent/50"
          >
            <span className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-accent">
              <l.icon className="size-4" />
            </span>
            <span className="flex-1">
              <span className="block text-[11px] text-muted-foreground">
                {l.label}
              </span>
              <span className="block text-sm text-foreground">{l.value}</span>
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
}

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const { toast } = useToast();
  const [values, setValues] = React.useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const inputClass = (field: keyof FormState) =>
    `h-10 w-full rounded-md border bg-muted/40 px-3 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring/40 ${
      errors[field] ? "border-red-500/60" : "border-border focus:border-accent"
    }`;

  const onChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      toast("Message sent — thank you!", "success");
      setValues({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
      toast("Something went wrong. Please email me directly.", "error");
    }
  };

  return (
    <Card className="p-6 sm:p-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Send a message
      </h3>
      <form onSubmit={onSubmit} noValidate className="mt-5 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" htmlFor="name" error={errors.name}>
            <input
              id="name"
              value={values.name}
              onChange={onChange("name")}
              className={inputClass("name")}
              aria-invalid={!!errors.name}
              autoComplete="name"
            />
          </Field>
          <Field label="Email" htmlFor="email" error={errors.email}>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={onChange("email")}
              className={inputClass("email")}
              aria-invalid={!!errors.email}
              autoComplete="email"
            />
          </Field>
        </div>
        <Field label="Subject" htmlFor="subject" error={errors.subject}>
          <input
            id="subject"
            value={values.subject}
            onChange={onChange("subject")}
            className={inputClass("subject")}
            aria-invalid={!!errors.subject}
          />
        </Field>
        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={onChange("message")}
            className={`w-full resize-none rounded-md border bg-muted/40 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring/40 ${
              errors.message
                ? "border-red-500/60"
                : "border-border focus:border-accent"
            }`}
            aria-invalid={!!errors.message}
          />
        </Field>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === "sending"}
          className="w-full"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : status === "sent" ? (
            <>
              <Check className="size-4" /> Message sent
            </>
          ) : (
            <>
              <Send className="size-4" /> Send message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something meaningful."
      description="I'm open to software engineering opportunities, backend/full-stack roles, and technically challenging projects."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ContactCard />
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
