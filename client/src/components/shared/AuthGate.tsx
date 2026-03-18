import { useState } from 'react';

const STORAGE_KEY = 'mvp_dashboard_auth';

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored === 'true';
    } catch {
      return false;
    }
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_DASHBOARD_PASSWORD;

    if (!expected) {
      setError('VITE_DASHBOARD_PASSWORD não configurado.');
      return;
    }

    if (password === expected) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setAuthed(true);
    } else {
      setError('Senha incorreta.');
      setPassword('');
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold text-white text-center">Dashboard</h1>
        <p className="text-sm text-white/40 text-center">Acesso restrito. Insira a senha.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00C96E]/50"
          placeholder="Senha"
          autoFocus
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 bg-[#00C96E] text-black font-semibold rounded-lg hover:bg-[#00A85A] transition-colors text-sm"
        >
          Entrar
        </button>
        <a href="/" className="block text-center text-xs text-white/30 hover:text-white/50 transition-colors">
          Voltar ao site
        </a>
      </form>
    </div>
  );
}
