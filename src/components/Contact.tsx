import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
  
    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
  
      const data = await response.json();
      setStatusMessage(data.message);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Failed to send message. Try again later.");
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-white flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center w-full max-w-lg px-6"
      >
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Let's discuss your next project</p>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
            <Send size={16} className="ml-2" />
          </motion.button>
          {statusMessage && <p className="text-sm text-gray-600 mt-2">{statusMessage}</p>}
        </form>
      </motion.div>
    </section>
  );
};
