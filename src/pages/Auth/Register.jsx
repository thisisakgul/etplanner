// src/pages/Auth/Register.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { register }            = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    // register(email, password, displayName)
    register(email.trim(), password, name.trim());
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Kayıt Ol</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="İsminiz"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <input
          type="password"
          placeholder="Parola"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Kayıt Ol
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Zaten hesabın var mı?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Giriş Yap
        </Link>
      </p>
    </div>
  );
}
