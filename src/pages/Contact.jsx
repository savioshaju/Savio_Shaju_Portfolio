import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github ,Linkedin ,Mail} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send. Please try again."));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="section-title text-white">Get in Touch</h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="input-clean" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="input-clean" placeholder="your@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="input-clean resize-none" placeholder="How can I help you?" />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button type="submit" className="btn-primary w-full md:w-auto px-8">
                Send Message
              </button>
              {status && <span className="text-sm text-blue-400 animate-pulse">{status}</span>}
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <a href="mailto:savioshajum@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
              <span><Mail size={18} /></span> savioshajum@gmail.com
            </a>
            <a href="https://linkedin.com/in/savio-shaju-81058528a/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
              <span><Linkedin size={18} /></span> LinkedIn
            </a>
            <a href="https://github.com/savioshaju" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
              <span><Github size={18} /></span> GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
