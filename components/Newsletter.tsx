"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Subscribing...");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Subscription successful!");
      setEmail("");
    } else {
      setStatus(data.error || "Failed to subscribe.");
    }
  };

  return (
    <div>
      <h1 className="text-lg font-bold">Join Our Newsletter</h1>
      <div className="mt-4">
        <h1 className="text-sm">
          Subscribe to our newsletter for the latest updates, tips, and
          insights. Be the first to know about new product launches and
          exclusive offers.
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="text-base  mt-4 bg-gray-200  text-gray-800 dark:text-gray-900 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-950 transition duration-300 cursor-pointer"
          >
            Subscribe
          </button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}
