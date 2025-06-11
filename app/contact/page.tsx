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
    <section className="pt-16 pb-16 scroll-mt-[12vh]" id="contact">
      <motion.h1
        className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold uppercase"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Get in Touch
      </motion.h1>
      <motion.span
        className="block w-16 h-1 bg-red-950 mx-auto mt-3"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      ></motion.span>
      <motion.p
        className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Have a question, suggestion, complaint or inquiry? We&apos;d love to
        hear from you.
      </motion.p>
      <motion.p
        className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Whether you&apos;re looking for product recommendations, our team is
        here to help.
      </motion.p>
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start gap-12 px-6">
          {/* Left Side */}
          <motion.div
            className="w-full lg:w-1/2 hidden lg:block px-8 py-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
            <p className="mb-4">
              <strong>Address:</strong>
              <br />
              395 Strand
              <br />
              London, United Kingdom
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>
              <br />
              +44 7492 922111
            </p>
            <p className="mb-4">
              <strong>Email:</strong>
              <br />
              argrouplondon7@gmail.com
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition bg-blue-600 rounded-xl p-2 text-white"
                >
                  <FaFacebookF className="text-2xl" />
                </Link>
                <Link
                  href="https://www.instagram.com/technyon?igsh=Mmk2eGdmaXB4dHRj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition bg-rose-600 rounded-xl p-2 text-white"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition bg-yellow-600 rounded-xl p-2 text-white"
                >
                  <FaSnapchat className="text-2xl" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition bg-gray-900 rounded-xl p-2 text-white"
                >
                  <FaTiktok className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
