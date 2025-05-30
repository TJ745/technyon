"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaSnapchat,
  FaTiktok,
} from "react-icons/fa6";
import { motion } from "motion/react";
import Link from "next/link";

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
    <section className="pt-16 pb-16 scroll-mt-[12vh] border" id="contact">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold uppercase">
        Get in Touch
      </h1>
      <span className="block w-16 h-1 bg-red-950 mx-auto mt-3"></span>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4">
        Have a question, suggestion, complaint or inquiry? We&apos;d love to
        hear from you.
      </p>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200">
        Whether you&apos;re looking for product recommendations, our team is
        here to help.
      </p>
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start gap-12 px-6">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 hidden lg:block px-8 py-10">
            <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
            <p className="mb-4">
              <strong>Address:</strong>
              <br />
              1234 Developer Lane
              <br />
              Tech City, TC 12345
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>
              <br />
              (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Email:</strong>
              <br />
              contact@example.com
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-8">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition"
                >
                  <FaFacebookF className="text-2xl" />
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition"
                >
                  <FaSnapchat className="text-2xl" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition"
                >
                  <FaTiktok className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="w-full mt-8">
              <div>
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

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full block text-black bg-gray-200 shadow-md outline-none px-6 py-3.5 rounded-md mb-4 h-[200px]"
                />

                <button
                  type="submit"
                  className="mt-8 flex items-center gap-2 bg-red-900 text-white px-6 py-4 rounded-md shadow-md hover:bg-red-950 transition mx-auto cursor-pointer"
                >
                  <FaPaperPlane size={18} /> Send Message
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-600 text-center mt-6">{status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
