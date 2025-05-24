"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="pt-16 pb-16 scroll-mt-[10vh]" id="contact">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        Get in Touch
      </h1>
      <span className="block w-16 h-1 bg-red-950 mx-auto mt-3"></span>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        Have a question, suggestion, or business inquiry? We&apos;d love to hear
        from you.
      </p>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200">
        Whether you&apos;re looking for product recommendations or partnership
        opportunities, our team is here to help.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16"
      >
        <div className="h-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
        </div>
        <div className="h-full">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full block text-black h-full bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4"
          />
        </div>
        <div className="col-span-1 lg:col-span-2 flex justify-center">
          <button
            type="submit"
            className="mt-8 flex items-center gap-2 bg-red-900 text-white px-6 py-4 rounded-md shadow-md hover:bg-red-950 transition mx-auto cursor-pointer"
          >
            <FaPaperPlane size={18} /> Send Message
          </button>
        </div>
      </form>

      <p className="text-sm text-gray-600 text-center mt-6">{status}</p>
    </section>
  );
}
