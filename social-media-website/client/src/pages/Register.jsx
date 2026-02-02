import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ token: "demo-token", profile: { name, email } });
    navigate("/");
  };

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-lg flex-col justify-center px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">Create your account</h1>
      <p className="mt-2 text-sm text-slate-400">Join the community and start sharing.</p>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100"
          placeholder="Full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-full rounded-full bg-indigo-500 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-indigo-400"
          type="submit"
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
