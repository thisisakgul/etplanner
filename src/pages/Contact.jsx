import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Burada gerçek bir API çağrısı yapabilirsiniz
    alert('Mesajınız başarıyla iletildi! Teşekkürler 😊');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">✉️ İletişim</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Adınız
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            E-posta
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Mesajınız
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
