import React, { useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import SketchText from "../components/SketchText";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/savio-shaju-81058528a/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/savioshaju",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 016.006 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_savio_shaju_/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.848 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.203.013-3.583.07-4.848.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    },
  ];

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent — thank you!");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send. Try again.");
      });
  }

  return (
    <section id="contact" className="relative w-full min-h-screen bg-gradient-to-br from-white via-cyan-50 to-pink-50 border border-neutral-900 px-4 sm:px-6 py-16 md:py-24
      before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900
      before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-12 md:mb-16">

          <div className="h-10 sm:h-12 md:h-20 mb-4 md:mb-6 accent-line inline-block">
            <SketchText
              text="Contact"
              size={window.innerWidth < 640 ? 36 : 48}
              className="h-full"
            />
          </div>

        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">


          <div className="border border-neutral-900 p-6">
            <p className="text-neutral-700 mt-3">
              Use the form to send a message.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="p-2 border border-neutral-900">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm">Email</p>
                <p>savioshajum@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-neutral-900 hover:bg-neutral-50"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="border border-neutral-900 p-6">
            <h3 className="mb-4">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-3">
                <input name="name" placeholder="Name" required value={form.name} onChange={handleChange} className="border p-2" />
                <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} className="border p-2" />
              </div>

              <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-2 w-full" />
              <textarea name="message" rows={5} placeholder="Message" required value={form.message} onChange={handleChange} className="border p-2 w-full" />

              <div className="flex justify-between items-center">
                <button type="submit" className="border px-5 py-2 hover:bg-neutral-50">Send</button>
                <span className="text-sm">{status}</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
