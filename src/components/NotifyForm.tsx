"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sage-dark font-medium text-center">
        C&apos;est noté ! Vous serez prévenu dès que les dates seront disponibles.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3 rounded-full border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50"
        required
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "…" : "Me prévenir"}
      </button>
      {status === "error" && (
        <p className="w-full text-sm text-red-600 text-center">
          Une erreur est survenue, veuillez réessayer.
        </p>
      )}
    </form>
  );
}
