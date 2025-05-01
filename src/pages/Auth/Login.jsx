import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useToast } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const navigate    = useNavigate();
  const { addToast } = useToast();
  const { setUser }  = useContext(AuthContext);

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user: fbUser } = await signInWithEmailAndPassword(auth, email, password);
      // normal kullanıcılar için localStorage’daki bayrak zaten korunur
      const isPremium = localStorage.getItem("isPremium") === "true";
      setUser({ ...fbUser, isPremium });
      addToast("Giriş başarılı", "success");
      navigate("/", { replace: true });
    } catch (err) {
      addToast("Giriş başarısız: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    const demoEmail = "emir@gmail.com";
    const demoPass  = "emir123";
    setLoading(true);

    signInWithEmailAndPassword(auth, demoEmail, demoPass)
      .then(({ user: fbUser }) => {
        // demo hesabını premium olarak işaretle
        localStorage.setItem("isPremium", "true");
        setUser({ ...fbUser, isPremium: true });
        addToast("Demo hesabıyla giriş yapıldı ve premium erişiminiz aktif", "success");
        navigate("/", { replace: true });
      })
      .catch(err => {
        addToast("Demo girişi başarısız: " + err.message, "error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Giriş Yap</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
        <input
          type="password"
          required
          placeholder="Şifre"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {loading ? "Yükleniyor…" : "Giriş Yap"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 disabled:opacity-50 transition"
        >
          {loading ? "Yükleniyor…" : "Demo ile Giriş"}
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Henüz hesabın yok?{" "}
        <button
          onClick={() => navigate("/register")}
          className="text-blue-600 hover:underline"
        >
          Kayıt Ol
        </button>
      </p>
    </div>
  );
}
