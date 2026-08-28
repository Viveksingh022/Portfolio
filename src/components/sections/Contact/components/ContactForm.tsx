import { useState } from "react";
import emailjs from "@emailjs/browser";

import ContactCard from "./ContactCard";
import MagneticButton from "../../../common/MagneticButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.message.trim()
    ) {
      setIsSuccess(false);
      setStatus("Please fill in all fields.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
    const hasEmailJsConfig =
      serviceId?.startsWith("service_") &&
      templateId?.startsWith("template_") &&
      publicKey &&
      !publicKey.includes(" ");

    setLoading(true);
    setStatus("");
    setIsSuccess(false);

    try {
      if (hasEmailJsConfig) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            ...formData,
            to_email: "viveksinghsikarwar022@gmail.com",
            reply_to: formData.from_email,
          },
          publicKey
        );
      } else {
        const response = await fetch(
          "https://formsubmit.co/ajax/viveksinghsikarwar022@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.from_name,
              email: formData.from_email,
              message: formData.message,
              _subject: `Portfolio message from ${formData.from_name}`,
              _replyto: formData.from_email,
              _captcha: "false",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("FormSubmit request failed");
        }
      }

      setIsSuccess(true);
      setStatus("Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setStatus("Failed to send message. Please try again.");
    }

    setLoading(false);
  }

  return (
    <ContactCard>
      <form onSubmit={handleSubmit} className="space-y-6">

        <h3 className="text-2xl font-bold text-white">
          Send a Message
        </h3>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Name
          </label>

          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/80
            px-4
            py-3
            text-white
            outline-none
            transition-all
            focus:border-blue-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Email
          </label>

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/80
            px-4
            py-3
            text-white
            outline-none
            transition-all
            focus:border-blue-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={1000}
            placeholder="Write your message here..."
            className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-700
            bg-slate-900/80
            px-4
            py-3
            text-white
            outline-none
            transition-all
            focus:border-blue-500
            "
          />
        </div>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${
              isSuccess
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}

        <MagneticButton
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </MagneticButton>

      </form>
    </ContactCard>
  );
}