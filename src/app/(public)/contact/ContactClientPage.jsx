"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
const ContactClientPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = "917814565015"; // ⚠️ Your WhatsApp number with country code (no +)

    const message = `
New Contact Form Message:

Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
  `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    reset();
  };
  return (
    <main className="py-24 max-sm:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative mb-16 max-w-3xl mx-auto text-center">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
          Contact
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
          Get in <span className="text-[#496cbf]">Touch</span> with Me
        </h1>

        {/* Accent Line */}
        <div className="h-[2px] w-16 bg-[#496cbf] mb-6 mx-auto" />

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Whether it’s a freelance project, full-time collaboration, or a quick
          question about development, I’d love to hear from you. Fill out the
          form below or reach out via social links.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="mt-20 max-sm:mt-10 max-w-6xl mx-auto px-0 md:px-8 grid gap-12 md:grid-cols-2 items-center">
        {/* Form */}
        <form
          className="relative bg-white/20 dark:bg-black/40 backdrop-blur-xl border border-[#496cbf]/20 rounded-3xl p-8  shadow-lg hover:shadow-[0_20px_60px_rgba(73,108,191,0.25)] transition-shadow duration-500"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-3xl font-semibold text-[#496cbf] mb-10 text-center">
            Get in Touch
          </h3>

          <div className="flex flex-col gap-6">
            {/* Name */}
            <input
              type="text"
              required
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full rounded-xl border border-[#496cbf]/30 bg-transparent px-5 py-4 text-sm text-[#0f172a] dark:text-white placeholder:text-[#496cbf]/60 placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#496cbf] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
            />

            {/* Email */}
            <input
              type="email"
              required
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full rounded-xl border border-[#496cbf]/30 bg-transparent px-5 py-4 text-sm text-[#0f172a] dark:text-white placeholder:text-[#496cbf]/60 placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#496cbf] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
            />

            {/* Message */}
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full rounded-xl border border-[#496cbf]/30 bg-transparent px-5 py-4 text-sm text-[#0f172a] dark:text-white placeholder:text-[#496cbf]/60 placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#496cbf] focus:border-transparent resize-none transition-all duration-300 shadow-sm hover:shadow-md"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative overflow-hidden rounded-xl px-10 py-4 bg-gradient-to-r from-[#496cbf] to-indigo-600 text-white font-medium shadow-[0_6px_20px_rgba(73,108,191,0.35)] hover:shadow-[0_12px_35px_rgba(73,108,191,0.45)] transition-all duration-300 group"
            >
              {/* Glow Layer */}
              <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>

          {/* Decorative Floating Gradient Circles */}
          <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-[#496cbf]/20 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-indigo-300/20 blur-3xl animate-pulse-slow" />
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-10 justify-center p-8   dark:bg-black/50 backdrop-blur-xl rounded-3xl border border-[#496cbf]/20 shadow-lg">
          {/* Section Header */}
          <div className="flex flex-col gap-2 mb-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#496cbf] tracking-tight">
              Get in Touch
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Reach out via email, phone, or social media. I’m always open to
              discuss projects, collaboration, or career opportunities.
            </p>
          </div>

          {/* Contact Items */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#eef2ff]/60 to-[#e0e7ff]/30 group hover:shadow-[0_10px_40px_rgba(73,108,191,0.2)] hover:translate-x-2 transition-transform duration-300">
              <Mail className="w-6 h-6 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[#496cbf]">Email</h4>
                <p className="text-sm text-muted-foreground break-all">
                  batraofficial.02@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#eef2ff]/60 to-[#e0e7ff]/30 group hover:shadow-[0_10px_40px_rgba(73,108,191,0.2)] hover:translate-x-2 transition-transform duration-300">
              <Phone className="w-6 h-6 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[#496cbf]">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 7814565015</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#eef2ff]/60 to-[#e0e7ff]/30 group hover:shadow-[0_10px_40px_rgba(73,108,191,0.2)] hover:translate-x-2 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[#496cbf]">
                  Location
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nabha, Punjab, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6 justify-start">
            <Link href="https://github.com/tanya-batra" target="_blank">
              <Github className="w-6 h-6 text-[#496cbf] hover:text-indigo-500 transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tanyabatra7814"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 text-[#496cbf] hover:text-indigo-500 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 flex flex-col items-center text-center px-4 md:px-0">
        <div className="relative max-w-2xl w-full bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-[#496cbf]/20 rounded-3xl p-6 md:p-16 shadow-lg hover:shadow-[0_20px_60px_rgba(73,108,191,0.2)] transition-all duration-500 group">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Let’s Build <span className="text-[#496cbf]">Something</span>{" "}
            Together
          </h2>
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            I’m open to freelance or full-time projects where we can create
            modern, scalable, and production-ready web applications.
          </p>
          <Link href="mailto:batraofficial.02@gmail.com">
            <button className="relative overflow-hidden rounded-xl px-10 py-4 bg-gradient-to-r from-[#496cbf] to-indigo-600 text-white font-medium shadow-[0_6px_20px_rgba(73,108,191,0.35)] hover:shadow-[0_12px_35px_rgba(73,108,191,0.45)] transition-all duration-300 group">
              <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Contact Me <Mail className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactClientPage;
